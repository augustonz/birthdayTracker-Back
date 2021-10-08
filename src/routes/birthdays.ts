import {Router} from 'express';
import birthdayModel from '../models/birthday';

const router = Router();

router.get('/',async(req,res)=>{
    try{
        const list = await birthdayModel.find();
        res.status(200).send(list);
    } catch(error) {
        res.status(401).send(error);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const birthday = await birthdayModel.findById(req.params.id);
        res.status(200).send(birthday);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/',async(req,res)=>{
    try{
        const birthday = new birthdayModel(req.body);
        const response = await birthday.save();
        res.status(200).send(response);
    } catch(error) {
        res.status(401).send(error);
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const birthday = await birthdayModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(birthday);
    } catch(error) {
        res.status(400).send(error);
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        await birthdayModel.findByIdAndDelete(req.params.id);
        res.status(200).send();
    } catch(error) {
        res.status(400).send(error);
    }
})

module.exports=router;