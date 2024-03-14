import express from 'express';
import { getRecords, addRecord, updateRecord, deleteRecord } from '../controllers/user.js';

const router = express.Router();

router.get('/', getRecords)

router.post('/', addRecord)

router.put('/:id', updateRecord)

router.delete('/:id', deleteRecord)

export default router