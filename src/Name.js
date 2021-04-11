import {Fragment} from 'react';

const Name = ({salutation}) => {

    console.debug('I was called with ' + salutation);

    return (
        <div>
            <strong>Hello</strong> {salutation}
        </div>
    );
};

export default Name;
