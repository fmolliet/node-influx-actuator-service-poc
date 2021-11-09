import { Request, Response } from 'express';

import _service from './Services';

export default class Controller {
    
    
    async verify(req : Request, res: Response): Promise<Response>{
        
        try{
            const result = {}// await _service.verify(req.body);
            
            if ( !result ){
                return res.status(403).json({message: 'Invalid token and secret.'})
            }
            
            return res.status(200).json(result)
        }catch (err: any){
            return res.status(500).json({message: err.message ? err.message : err});
        }
    }
    
   

}