const Card = ({ name, description, linkedIn, twitter, interests }) => {
    return (
        <div style={styles.card}>
            <h1>{name}</h1>
            <p>{description}</p>

            <h2>Interests</h2>
            {
                interests.map((el, i) => <p key={i}>{el}</p>)
            }
            <div style={styles["div.Btn"]}>
                <a style={styles.btn} href={linkedIn} target="_blank">LinkedIn</a>
                <a style={styles.btn} href={twitter} target="_blank">Twitter</a>
            </div>
        </div>
    )
}

export default Card

const styles = {
    card: {
        border: '1px solid silver',
        borderRadius: '8px',
        backgroundColor: 'white',
        color: 'black',
        margin: '24px',
        display: 'flex',
        gap: '8px',
        width: '20rem',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        flexDirection: 'column',
        padding: '14px'
    },
    'div.Btn':{
        display: 'flex',
        gap: '1rem'
    },
    btn: {
        border: 'none',
        borderRadius: '6px',
        backgroundColor: 'royalBlue',
        textDecoration: 'none',
        padding: '6px 12px',
        fontSize: '1.5rem',
        color: 'white'
    }
}
