export const ProfileItem = ({ profile, id, onInputChangeHandler }) => {
  const inputOnChangeHandler = (e, profile) => {
    onInputChangeHandler(profile, e.target.checked)
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-4 py-2">
        <input
          className="w-4 h-4"
          type="checkbox"
          id={id}
          onChange={(e) => inputOnChangeHandler(e, profile)}
          checked={profile?.isChecked}
          disabled={profile?.isDisabled}
        />
        <label
          htmlFor={id}
          className="font-medium opacity-60"
        >
          {profile?.text}
        </label>
        {profile?.isDisabled && <span className="font-medium opacity-60 border py-1 text-orange-400 bg-orange-50 px-4 text-xs rounded-full uppercase">Disabled</span>}
      </div>
    </div>
  )
}