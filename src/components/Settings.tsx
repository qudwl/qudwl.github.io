import React from "react";

const Settings = () => {

    return (
        <div className="m-auto mt-2 card settings">
            <div className="flex justify-space-between m-1">
                <label htmlFor="darkmodecheck">Dark Mode</label>
                <input type="checkbox" id="darkmodecheck" />
            </div>
            <div className="flex justify-space-between m-1">
                <label htmlFor="reduceanimationcheck">Reduce Animations</label>
                <input type="checkbox" id="reduceanimationcheck" />
            </div>
        </div>
    );
}

export default Settings;