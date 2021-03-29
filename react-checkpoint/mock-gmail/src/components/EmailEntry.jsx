var EmailEntry = ({email, status, display}) => {
    return(
        <div className="emailEntry">
            <span className="sender">{email.sender}</span>
            <span className="subject" onClick={() => display({email})}>{email.subject}</span>
            <span className="date">{email.date}</span>
        </div>
    );
};

export default EmailEntry;