import EmailEntry from './EmailEntry'

var EmailList= ({emails, state, display}) => {
    return(
        <div className="emailList">
            <ul>
                {emails.map((email) => <li><EmailEntry email={email} status={state} display={display}/></li>)}
            </ul>
            
        </div>
    );
};

export default EmailList;