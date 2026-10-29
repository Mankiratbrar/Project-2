import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

    cloudinary.config({ 
        cloud_name: 'r5vlb89k', 
        api_key: '164978165494267', 
        api_secret: PROCESS.env.CLOUDINARY_API_SECRET
    })

    const uploadCloudinary = async (filePath) => {
        try {
            if(!filePath) return null
            const response = await cloudinary.uploader.upload(filePath,{
                resource_type: 'auto'
            })
            console.log('uploaded',response.url)
            return response
        } catch (error) {
            fs.unlinkSync(filePath)
            return null
        }
    }
    export default uploadCloudinary

