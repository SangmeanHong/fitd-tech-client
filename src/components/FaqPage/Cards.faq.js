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
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nibh ipsum, quis condimentum metus luctus egestas. '
              //label='monster.ca'
             // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />

            <CardItem
              // src='images/article-5.jpg'
            heading='Is coaching private and confidential'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nibh ipsum, quis condimentum metus luctus egestas. '
            //label='monster.ca'
           // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
                // src='images/article-5.jpg'
                heading='How do I talk to my coach?'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nibh ipsum, quis condimentum metus luctus egestas. '
                //label='monster.ca'
               // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
            <CardItem
                // src='images/article-5.jpg'
                heading='What coaching cases have you handled?'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nibh ipsum, quis condimentum metus luctus egestas. '
                //label='monster.ca'
               // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />

            <CardItem
               // src='images/article-5.jpg'
               heading='What is the difference between career Coaching and Executive Coaching?'
               text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nibh ipsum, quis condimentum metus luctus egestas. '
               //label='monster.ca'
              // path='https://www.monster.ca/career-advice/article/Graduated-and-confused-Questions-to-ask-yourself-to-land-a-job'
            />
             <CardItem
               // src='images/article-5.jpg'
               heading='Can I pick which coach I want'
               text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nibh ipsum, quis condimentum metus luctus egestas. '
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