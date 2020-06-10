import {profile} from './main.ts'

const profileDetails = (profile: { name: string; age: number; bio: string}): void =>{
  console.log(`${profile.name} is ${profile.age} years old\nBio: ${profile.bio}`)
}

profileDetails(profile)
profileDetails({ name: "Mike", age: 37, bio: "Mike is a Project manager"})