import { useState } from "react"
import { ProfileItem } from "./components/ProfileItem"

const initialProfileData = [
  {
    id: 1,
    isChecked: true,
    text: "Linkedin Bio",
    isDisabled: false
  },
  {
    id: 2,
    isChecked: false,
    text: "List Of Past Jobs",
    isDisabled: false
  },
  {
    id: 3,
    isChecked: true,
    text: "Years Of Experience",
    isDisabled: false
  },
  {
    id: 4,
    isChecked: false,
    text: "Current Job Description",
    isDisabled: true
  },
  {
    id: 5,
    isChecked: true,
    text: "Current Experience",
    isDisabled: false
  },
  {
    id: 6,
    isChecked: true,
    text: "Current Job Specialities",
    isDisabled: true
  }
]

function App() {
  const [profileBaseData, setProfileBaseData] = useState(initialProfileData)

  const inputOnChangeHandler = (profile, checked) => {
    setProfileBaseData(prevState => {
      return prevState.map(item => {
        if (item.id === profile.id) {
          return {
            ...item,
            isChecked: checked
          }
        }
        return item
      })
    })
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen sm:flex-row">
        <div className="border rounded-lg border-r-0 rounded-r-none sm:w-2/6">
          <div className="border-b bg-orange-50 rounded-t-lg rounded-r-none">
            <div className="px-8 py-4">
              <h1 className="font-semibold text-orange-400">Profile Based Personalization</h1>
            </div>
          </div>
          <div className="px-8 py-3">
            {profileBaseData.map(profile => (
              <ProfileItem
                key={profile.id} 
                profile={profile}
                id={profile.id}
                onInputChangeHandler={inputOnChangeHandler}
              />
            ))}
          </div>
        </div>
        <div className="border rounded-lg rounded-l-none sm:w-2/6">
          <div className="border-b bg-blue-100 rounded-r-lg rounded-b-none">
            <div className="px-8 py-4">
              <h1 className="font-semibold text-blue-400">Account Based Personalization</h1>
            </div>
          </div>
          <div className="px-8 py-3">
            {profileBaseData.map(profile => (
              <ProfileItem
                key={profile.id} 
                profile={profile}
                id={profile.id}
                onInputChangeHandler={inputOnChangeHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
