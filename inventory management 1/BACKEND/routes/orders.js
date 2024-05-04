const router = require("express").Router();
let Order = require("../models/order");


//Create Class..
router.route("/add").post((req,res)=>{

    const sname = req.body.sname;
    const oid = Number(req.body.oid);
    const oitem = req.body.oitem;
    const qty = Number(req.body.qty);
   


    const newOrder = new Order({
        sname,
        oid,
        oitem, 
        qty

    })

    newOrder.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/all").get((req,res)=>{

    Order.find().then((order)=>{
        res.json(order)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/allreq").get((req,res)=>{

    Order.find().then((order)=>{
        res.json(order)
    }).catch((err)=>{
        console.log(err)
    })
})





//Delete Class..
router.route("/delete/:id").delete(async (req, res) => {
    let orderId = req.params.id;

    await Order.findByIdAndDelete(orderId)
    .then(() => {
        res.status(200).send({status: "Order Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete order", error: err.message});
    })
})



router.route("/get/:id").get(async (req, resp) => {
    let result = await Order.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/update/:id").put(async (req, resp) => {
    let result = await Order.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;