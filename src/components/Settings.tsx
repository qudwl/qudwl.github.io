type SettingsProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    reduceAnimations: boolean;
    setReduceAnimations: (reduceAnimations: boolean) => void;
}

const Settings = ({ darkMode, setDarkMode, reduceAnimations, setReduceAnimations }: SettingsProps) => {

    return (
        <div className="m-auto mt-2 card settings">
            <div className="flex justify-space-between m-1">
                <label htmlFor="darkmodecheck">Dark Mode</label>
                <input type="checkbox" id="darkmodecheck" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
            </div>
            <div className="flex justify-space-between m-1">
                <label htmlFor="reduceanimationcheck">Reduce Animations</label>
                <input
                    type="checkbox"
                    id="reduceanimationcheck"
                    checked={reduceAnimations}
                    onChange={(e) => setReduceAnimations(e.target.checked)} />
            </div>
        </div>
    );
}

export default Settings;