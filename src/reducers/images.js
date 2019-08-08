const initialState = {
    images: null,
    userImages: null,
    error: null,
    user: {
        id: 78261,
        name: 'Sharer1',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckMs41TdHCdl0LF4v24KcdXnUC2NcFX3izS9y65bs-MC28eie'
    }
}

export default function  (state = initialState, action) {

    switch (action.type) {
        case 'FETCH_IMAGES':
            return Object.assign({}, state, {
                images: [],
                fetchingImages: true,
                error: null
            });
        case 'FETCH_IMAGES_SUCCESS':
            return Object.assign({}, state, {
                images: action.images,
                fetchingImages: false,
                error: null
            });        
        case 'FETCH_IMAGES_ERROR':
            return Object.assign({}, state, {
                images: null,
                fetchingImages: false,
                error: action.error
            });        
        case 'FETCH_USER_IMAGES':
            return Object.assign({}, state, {
                userImages: [],
                fetchingUserImages: true,
                error: null
            });   
        case 'FETCH_USER_IMAGES_SUCCESS':
            return Object.assign({}, state, {
                userImages: action.images,
                fetchingUserImages: false,
                error: null
            });  
        case 'FETCH_USER_IMAGES_ERROR':
            return Object.assign({}, state, {
                userImages: null,
                fetchingUserImages: false,
                error: action.error
            });
        case 'ADD_IMAGE':
            return Object.assign({}, state, {
                addingImage: true,
                error: null
            });
        case 'ADD_IMAGE_SUCCESS':
            let image = {
                id: Math.floor(Math.random() *  99999999),
                src: action.imageSrc,
                user: state.user,
            }
            return Object.assign({}, state, {
                addingImage: false,
                image: [image].concat(state.images),
                userImages: [image].concat(state.images),
                error: null
            });   
        case 'ADD_IMAGE_ERROR':
            return Object.assign({}, state, {
                addingImage: false,
                error: action.error
            });     
        default:
            return state;                       
    }

}