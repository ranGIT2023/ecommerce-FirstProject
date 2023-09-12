const multer = require('multer')
const path = require('path')

// multer for product
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/productImages")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


// multer for profile pic ===============================================================================================

const profileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/userImages');
    },
    filename: (req, file, cb) => {
        // Ensure the uploaded file will overwrite the existing one with the same name
        cb(null, `${req.session.userId}${path.extname(file.originalname)}`);
    },
    overwrite: true, // Enable overwriting existing files
});

const profileImageUpload = multer({storage:profileStorage})

// multer for banner ================================================
const bannerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/bannerImages');
    },
    filename: (req, file, cb) => {
        // Ensure the uploaded file will overwrite the existing one with the same name
        cb(null, `${req.body.imageName}${path.extname(file.originalname)}`);
    },
    overwrite: true, // Enable overwriting existing files
});

const bannerImageUpload = multer({storage:bannerStorage})






module.exports = {upload,profileImageUpload,bannerImageUpload}




//multer for user profile

// const profileStorage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'public/userImages')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))
//     }
// })

// const profileImageUpload = multer({storage:profileStorage})



// const profileStorage = multer.diskStorage({


//     destination:(req,file,cb)=>{
//         cb(null,'public/userImages')
//     },
//     filename:(req,file,cb)=>{
//         let userId = req.session.userId
//         console.log(req.session.userId);
//         cb(null,userId+path.extname(file.originalname))
//     }
// })