import styles from "../../styles/CompetitorLeaderboard.module.css"
import Image from "next/image"
import { UilInstagram, UilFacebook, UilTwitter, UilTriangle } from '@iconscout/react-unicons';
import profile from "../../assets/profile.jpg"

const CompetitorLeaderboard = ({ data }) => {
        
  return (
    <div className={styles.container}>
        <p className={styles.channelTitle}>Competitors</p>
        <div className={styles.personCompetitors}>
            {data.map( (person, index) =>(
                <div key={person.id} className={styles.personCompetitor}>
                    <img src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className={styles.profileImage} height={50} width={50} alt="image"/>
                    <div className={styles.right}>
                        <div>
                            <p className={styles.name}>{person.name}</p>
                            <p className={styles.point}>{person.point} Points</p>
                        </div>
                        <div className={styles.place}>
                            {person.place}
                            
                            <UilTriangle 
                            size={15}
                             className={`${styles.competitorIcon} ${index % 2 === 0 ? styles.evenIcon : styles.oddIcon}`}/>
                        </div>
                    </div>
                    
                </div>

            ))}
        </div>
          
       
    </div>
  )
}

export default CompetitorLeaderboard
