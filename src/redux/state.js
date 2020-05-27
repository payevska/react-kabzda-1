const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
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
      ],
      newMessageBody: ''    
    } 
  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {  // {type: 'ADD-POST}
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === 'SEND-MESSAGE') {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 4, message: body});
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => 
  ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => 
  ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body});



export default store;