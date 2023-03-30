import express from 'express';
import { getCandidates, getCandidatesBySkill, getCandidatesById } from '../models/candidates.js';
const router=express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await getCandidates();
        res.json({
            sucess: true,
            payload: result
        })
    } catch(err) {
        console.error(err)    
        res.status(500).json({
            sucess:false,
            message: "Error retriving candidates"
        })
    }

})

router.get('/:id', async (req, res) => {
    console.log(req)
    try {
        const result = await getCandidatesById(req.params.id);
        res.json({
            sucess: true,
            payload: result
        })
    } catch(err) {
        console.error(err)    
        res.status(500).json({
            sucess:false,
            message: "Error retriving candidates by skill"
        })
    }

})

router.get('/skill/:skill', async (req, res) => {
    console.log(req)
    try {
        const result = await getCandidatesBySkill(req.params.skill);
        res.json({
            sucess: true,
            payload: result
        })
    } catch(err) {
        console.error(err)    
        res.status(500).json({
            sucess:false,
            message: "Error retriving candidates by skill"
        })
    }

})

export default router
