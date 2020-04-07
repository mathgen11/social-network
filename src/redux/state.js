export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let store = {
  _state: {
    profile: {
      postsData: [
        {
          id: 1,
          src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
          title: 'About my weekend',
          likes: 17
        },
        {
          id: 2,
          src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
          title: 'Some picture with my crush',
          likes: '31'
        }
      ],
      newPostTitle: ''
    },
    messages: {
      dialogsData: [
          { id: 1, name: 'Kyong' },
          { id: 2, name: 'Daeun' },
          { id: 3, name: 'Eunji' },
          { id: 4, name: 'Jiyoung' },
          { id: 5, name: 'Sunyoung' }
      ],
      messagesData: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'What is your favorite pet?' }
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        { id: 1, img: 'https://avatarfiles.alphacoders.com/822/82242.png', name: 'Makoto' },
        { id: 2, img: 'https://www.elsetge.cat/myimg/f/90-907317_couple-wallpaper-matching-icons-avatar-couple-couple-glitch.jpg', name: 'Rina' },
        { id: 3, img: 'https://profilepicture7.com/img/img_dongman/2/938383067.jpg', name: 'Tsuki' }
      ]
    }
  },

  _rerenderEntireTree() {

  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let post = {
        id: 3,
        src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
        title: this._state.profile.newPostTitle,
        likes: 0
      };

      this._state.profile.postsData.push(post);
      this._state.profile.newPostTitle = '';
      this._rerenderEntireTree(this._state);

    } else if (action.type === UPDATE_POST_TITLE) {
      this._state.profile.newPostTitle = action.text;
      this._rerenderEntireTree(this._state);

    } else if (action.type === ADD_MESSAGE) {
      let message = { id: 4, text: this._state.messages.newMessageText };
      this._state.messages.messagesData.push(message);
      this._state.messages.newMessageText = '';
      this._rerenderEntireTree(this._state);

    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.messages.newMessageText = action.text;
      this._rerenderEntireTree(this._state);
    }
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  }
}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostTitleAction = (text) => ({
  type: UPDATE_POST_TITLE,
  text: text
});

export const addMessageAction = () => ({ type: ADD_MESSAGE });
export const updateMessageTextAction = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text
});

export default store;
