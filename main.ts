

uploadImage(req){
    let payload = {
        fileName :req.fileName,
        file:req.fileName,
    }
    this.UploadService.AddFileToSerer(payload).then(data => {
        let response = {
            id : data.uuid,
            message: "Image uploaded successfully"
        }
        return response;
    }).catch(err = {
        throw err({message : err.message});
    })
}

resizeImage(image){
    let payload = {
        fileName :req.fileName,
        file:req.fileName,
        width:req.width,
        heigth:req.heigth,
    }
    this.reSizeService.resize(payload).then(data => {
        let response = {
            id : data.uuid,
            message: "Image resized successfully"
        }
        return response;
    }).catch(err = {
        throw err({message : err.message});
    })
}

cropImage(req){
    let payload = {
        fileName :req.fileName,
        file:req.fileName,
        size:req.size,
        cordinates:req.cordinates,
    }
    this.reSizeService.crop(payload).then(data => {
        let response = {
            id : data.uuid,
            message: "Image crop successfully"
        }
        return response;
    }).catch(err = {
        throw err({message : err.message});
    })
}

getImage(id){
    this.reSizeService.crop({uuid:id}).then(data => {
        let response = {
            id : data.uuid,
            file:data.file,
            message: "Image crop successfully"
        }
        return response;
    }).catch(err = {
        throw err({message : err.message});
    })
}