export default {
    addImage: function (image) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(()=>{resolve('<imgUrl>')},3000);
            }
        )
    },
    fetchImages: function (user = null) {
        const images = [
            {id:1, src: 'https://d3c1jucybpy4ua.cloudfront.net/data/62794/big_picture/travel.jpg?1558440862', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzix6zlJLz7MDcz907yfj-wRJnZ1FvktyrFmfJYuEPPOV7jVv52g', name: 'Naia'}},
            {id:2, src: 'https://amp.insider.com/images/59b8428f52d8fb49008b467c-1920-1440.jpg', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e', name: 'Mike_1982'}},
            {id:5, src: 'https://amp.insider.com/images/59b842cb52d8fb49008b467d-1536-1152.jpg', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMs41TdHCdl0LF4v24KcdXnUC2NcFX3izS9y65bs-MC28eie', name: 'Sharer1'}},
            {id:3, src: 'https://amp.insider.com/images/59b8434552d8fb7c3a8b4594-1920-1440.jpg', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzix6zlJLz7MDcz907yfj-wRJnZ1FvktyrFmfJYuEPPOV7jVv52g', name: 'Naia'}},
            {id:6, src: 'https://amp.insider.com/images/59b8476059d82e38008b4692-750-563.jpg', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMs41TdHCdl0LF4v24KcdXnUC2NcFX3izS9y65bs-MC28eie', name: 'Sharer1'}},
            {id:4, src: 'https://amp.insider.com/images/59b847ab59d82e39008b46c3-1136-852.jpg', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMs41TdHCdl0LF4v24KcdXnUC2NcFX3izS9y65bs-MC28eie', name: 'Sharer1'}},
            {id:7, src: 'https://amp.insider.com/images/59b84cfae517bd4c2c8b45b1-960-720.jpg', user: {pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMs41TdHCdl0LF4v24KcdXnUC2NcFX3izS9y65bs-MC28eie', name: 'Sharer1'}},
        ];
        return new Promise(
            (resolve, reject) => {
                setTimeout(()=>{resolve(images.filter(img=> !user || user === img.user.name))},1500);
            }
        );
    },
}