let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
      ],
      newPostText: 'it-kamasutra.com'  
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What are you doing?'}
            ],
        dialogs: [
            {id: 1, name: 'Andry'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Lera'},
            {id: 5, name: 'Sveta'},
            {id: 6, name: 'Victor'},
            {id: 7, name: 'Sasha'}
            ]    
    } 
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;