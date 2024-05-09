import img1 from  "../assets/images/hq720.jpeg"
import img2 from "../assets/images/og-image.jpeg"


export const sendMessages =[
    {
        id: 1, 
        owner: false, 
        message: "Hi", 
        images: []
    },
    {
        id: 2,
        owner: true,
        message: "Hi how are you doing",
        images: []
    },
    {
        id: 3,
        owner: false,
        message: "Yeah I am fine",
        images: []
    },
    {
        id: 4,
        owner: false,
        message: "and you? I hope you are fine",
        images: []
    },
    {
        id: 5,
        owner: true,
        message:"Some images",
        images: [img1, img2]
    },
    {id:6, owner: false, message: "Cool",images:[]},
    {id:7, owner: false,message: "Nice",images:[]},
    {id:8, owner: true, message:"See you", images:[]},
    {id:9, owner: false,message:"Some images",images:[img2,img1]},
]
