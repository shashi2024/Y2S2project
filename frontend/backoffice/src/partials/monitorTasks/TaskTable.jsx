import Button from "../../components/Button";

function TasksTable() {
    return (
        <div>
        <h1 className="text-2xl font-bold">Monitor Tasks</h1>
        <hr className="border-t border-second_background mt-2 mb-12"/>
        <table className="w-full text-left border-collapse">
            <thead className="border-t border-second_background">
            <tr className="bg-second_background">
                <th className="py-4 px-6">Task Title</th>
                <th className="py-4 px-6">Task Type</th>
                <th className="py-4 px-6">Task Deadline</th>
                <th className="py-4 px-6">Assignee</th>
                <th className="py-4 px-6">Task Status</th>
                <th className="py-4 px-6">Actions</th>
            </tr>
            </thead>
            <tbody>
            {/* Replace this with your data */}
            <tr className="border-t border-second_background">
                <td className="py-4 px-6">Task 1</td>
                <td className="py-4 px-6">Type 1</td>
                <td className="py-4 px-6">2022-12-31</td>
                <td className="py-4 px-6">John Doe</td>
                <td className="py-4 px-6">In Progress</td>
                <td className="py-4 px-6">
                <Button>Edit</Button>
                </td>
            </tr>

            <tr className="border-t border-second_background">
                <td className="py-4 px-6">Task 2</td>
                <td className="py-4 px-6">Type 2</td>
                <td className="py-4 px-6">2022-12-30</td>
                <td className="py-4 px-6">Don Juana</td>
                <td className="py-4 px-6">In Progress</td>
                <td className="py-4 px-6">
                <Button>Edit</Button>
                </td>
            </tr>

            <tr className="border-t border-second_background">
                <td className="py-4 px-6">Task 3</td>
                <td className="py-4 px-6">Type 1</td>
                <td className="py-4 px-6">2022-12-31</td>
                <td className="py-4 px-6">James Smith</td>
                <td className="py-4 px-6">In Progress</td>
                <td className="py-4 px-6">
                <Button>Edit</Button>
                </td>
            </tr>
            {/* End replace */}
            </tbody>
        </table>
        </div>
    );
    }

    export default TasksTable;