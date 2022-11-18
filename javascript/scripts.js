function enablePhotoUpload( ){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result

            changeMemePicture(uploadImage)

            // document.querySelector("#display-image").style
            // .backgroundImage = `url(${uploadImage})`
        })

        reader.readAsDataURL(this.files[0])
    })
}
async function mapImageList(){
    const memesObject =[
        {
            "name":"chapolin",
            "path":"./imagens/memes/chapolin.jpg"
        },
        {
            "name":"chloe",
            "path":"./imagens/memes/chloe.jpg"
        },
        {
            "name":"drake",
            "path":"./imagens/memes/drake.jpg"
        },
        {
            "name":"faustao",
            "path":"./imagens/memes/faustao.jpg"
        },
        {
            "name":"joelma",
            "path":"./imagens/memes/joelma.jpg"
        },
    ]
    return memesObject
}
async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)

    });
}
async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}
async function main(){
    const memesImagelist = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImagelist)
    await changeMemePicture(memesImagelist[0].path)

}
main()