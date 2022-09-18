import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import LikeModal from "./LikeModal";
import "./Tweets.css";

// const tweetContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "ADD_USER") {
    const eachTweets = [...state.tweets, action.payload];
    return {
      tweets: eachTweets,
      modalContent: "you just added a tweet",
      modalState: true,
    };
  }

  if (action.type === "NO_TWEET") {
    return {
      ...state,
      modalContent: "Please add a tweet",
      modalState: true,
    };
  }

  if (action.type === "REMOVE_TWEET") {
    const removeTweet = state.tweets.filter(
      (each) => each.id !== action.payload
    );
    return {
      ...state,
      tweets: removeTweet,
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modalState: false,
    };
  }
};

const defaultState = {
  tweets: [],
  modalContent: "",
  modalState: false,
};

const Tweets = () => {
  const [tweet, setTweet] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [getTweet, setGetTweet] = useState([]);
  // const [likeTweet, setLikeTweet] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (tweet) {
      const tweeter = { id: new Date().getTime().toString(), tweet };
      dispatch({ type: "ADD_USER", payload: tweeter });
      setTweet("");
    } else {
      dispatch({ type: "NO_TWEET" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  if (state.tweets.length === 0) {
    return (
      <form onSubmit={submitHandler} className="form">
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Tweet here"
            maxLength="200"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <div className="btn-container">
            <button type="submit" className="btn">
              Tweet
            </button>
          </div>
          <p className="no-tweet">No tweets available yet</p>
        </div>
      </form>
    );
  }

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        {state.modalState && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Tweet here"
            maxLength="200"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <div className="btn-container">
            <button type="submit" className="btn">
              Tweet
            </button>
          </div>
        </div>
      </form>
      <section className="section">
        {state.tweets.map((eachtweet) => {
          return (
            <>
              <div key={eachtweet.id} className="tweet">
                <div className="eachTweet">
                  <p>{eachtweet.tweet}</p>
                  <div className="btn-del">
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_TWEET",
                          payload: eachtweet.id,
                        })
                      }
                    >
                      Delete
                    </button>
                    <LikeModal />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Tweets;
