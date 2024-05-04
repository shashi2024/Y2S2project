const router = require("express").Router();
let Supplier = require("../models/supplier");


//Create Class..
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const item = req.body.item;
    const snumber = Number(req.body.snumber);
    const cname = req.body.cname;
   


    const newSupplier = new Supplier({
        name,
        email,
        item,
        snumber, 
        cname

    })

    newSupplier.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/all").get((req,res)=>{

    Supplier.find().then((supplier)=>{
        res.json(supplier)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/allsd").get((req,res)=>{

    Supplier.find().then((supplier)=>{
        res.json(supplier)
    }).catch((err)=>{
        console.log(err)
    })
})

//Delete Class..
router.route("/delete/:id").delete(async (req, res) => {
    let supplierId = req.params.id;

    await Supplier.findByIdAndDelete(supplierId)
    .then(() => {
        res.status(200).send({status: "Supplier Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete supplier", error: err.message});
    })
})


router.route("/get/:id").get(async (req, resp) => {
    let result = await Supplier.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  





router.route("/update/:id").put(async (req, resp) => {
    let result = await Supplier.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;