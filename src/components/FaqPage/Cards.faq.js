import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards__h1'>FAQ</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <CardItem 
             // src='images/article-5.jpg'
      
            heading='How Do I get Started?'
            text='You can book a coach and see their small article or podcast they have which will help you figure out what kind of coaching is best for you.'

              //label='monster.ca'
             // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />

            <CardItem
              // src='images/article-5.jpg'
            heading='Is coaching private and confidential?'
            text='All coaching calls and/or messages are totally private one on one sessions. We do not share your personal information with anyone.'
            //label='monster.ca'
           // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
                // src='images/article-5.jpg'
                heading='How do I talk to my coach?'
                text='You can talk to your coach on the FITD website by either messaging them personally or calling the number they provided.'
                //label='monster.ca'
               // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
            <CardItem
                // src='images/article-5.jpg'
                heading='What coaching cases have you handled?'
                text='We have coaches who have helped many clients in the past and are growing in their industry at a large rate. Our coaches offer skills and talents like learning a new programming launguage, team management, or simply any skills you need in an IT industry.'
                //label='monster.ca'
               // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />

            <CardItem
               // src='images/article-5.jpg'
               heading='What will career Coaching do?'
               text='Career coaching will help you sharpen your skills and help you decide on what type of IT person you really are. You can explore any sort of interests best seem fit for you.'
               //label='monster.ca'
              // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
             <CardItem
               // src='images/article-5.jpg'
               heading='Can I pick which coach I want?'
               text='You can absouletely pick what coach you want. You can also use the search filter to find exactly what kind of coach you are looking for, along with our own reccomendations.'
               //label='monster.ca'
              // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;