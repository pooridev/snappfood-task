import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <label>
                    name:
                    <input/>
                </label>
                <br />
                <label>
                    enabled:
                    <input type="checkbox" />
                </label>
                <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default Form;