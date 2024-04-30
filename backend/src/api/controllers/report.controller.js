// eslint-disable-next-line import/no-extraneous-dependencies
import xlsx from 'xlsx';
import logger from '../../utils/logger';
import Order from '../model/order.model';
import {MaintenanceTask} from '../model/maintenanceTask.model'


export const orderReport = async (req, res) => {
    try {
        const orders = await Order.find({}); 
        const workbook = xlsx.utils.book_new();
        const worksheetData = [
            ['Order Number', 'Items', 'Payment Status', 'Order Status', 'Discount', 'Total Amount', 'Discounted Amount', 'Customer ID', 'Order Date', 'Order Time'],
            ...orders.map(order => [
                order.orderNumber, 
                JSON.stringify(order.items), 
                order.paymentStatus, 
                order.orderStatus, 
                order.discount, 
                order.totalAmount, 
                order.discountedAmount, 
                order.customerID, // there's an issue with this - not showing up in the report
                order.orderDate, 
                order.orderTime
            ])
        ];
        const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

        xlsx.utils.book_append_sheet(workbook, worksheet, 'Orders');

        const excelBuffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        
        const now = new Date();
        
        const timestamp = now.toISOString().replace(/[:\-T]/g, '').split('.')[0];
        logger.warn(`timestamp: ${timestamp}`)
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
        res.setHeader('Content-Disposition', `attachment; filename="${timestamp}_orders.xlsx"`);
        res.setHeader('Content-Length', excelBuffer.length);

        res.end(excelBuffer, 'binary'); 
    } catch (error) {
        logger.error(error.message)
        res.status(500).send('Failed to generate report');
    }
};

export const foodItemReport = () => {
    logger.info('Generating food item report');
}

export const taskReport = async (req, res) => {
    try {
        const tasks = await MaintenanceTask.find({});
        logger.warn(tasks)
        const workbook = xlsx.utils.book_new();
        const worksheetData = [
            ['Task ID', 'Title', 'Description', 'Completed', 'Status', 'Start Time', 'End Time', 'Task Type', 'Room ID', 'Created At', 'Duration'],
            ...tasks.map(task => [
                // eslint-disable-next-line no-underscore-dangle
                task._id,
                task.title,
                task.description,
                task.completed,
                task.status,
                task.startTime,
                task.endTime,
                // eslint-disable-next-line no-underscore-dangle
                task.__t,
                task.roomId,
                task.createdAt,
                task.duration
            ])
        ];
        const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

        xlsx.utils.book_append_sheet(workbook, worksheet, 'Tasks');

        const excelBuffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        const now = new Date();
        
        const timestamp = now.toISOString().replace(/[:\-T]/g, '').split('.')[0];
        logger.warn(`timestamp: ${timestamp}`)
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
        res.setHeader('Content-Disposition', `attachment; filename="${timestamp}_tasks.xlsx"`);
        res.setHeader('Content-Length', excelBuffer.length);

        res.end(excelBuffer, 'binary'); 
    } 
    catch (error) {
        logger.error(error.message)
        res.status(500).send('Failed to generate report');
    }
}