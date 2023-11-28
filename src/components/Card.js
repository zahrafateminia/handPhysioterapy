import React from 'react';
import styles from '../components/Card.module.css';

const Card = (props) => {
    return (
        
            <div className={styles.container}>
            
            <img className={styles.img} src={props.pic}/>
             
             
                <h5 className={styles.descript}>{props.descrip}</h5>
            
          
            
            
        </div>
    );
};

export default Card;