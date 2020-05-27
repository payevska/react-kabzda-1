import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    },
    sidebar: {} 
  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;