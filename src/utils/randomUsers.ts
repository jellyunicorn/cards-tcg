import axios from "axios";

const axiosRandomUsers = axios.create({
  baseURL: "https://randomuser.me/api",
});

export interface RandomUser {
  name: string;
  thumbnail: string;
}

export const getRandomUsers = async (amount: number, thumbSize: string) => {
  if (
    thumbSize !== "large" &&
    thumbSize !== "medium" &&
    thumbSize !== "thumbnail"
  ) {
    throw new Error("Thumbnail size must be 'large', 'medium', or 'thumbnail");
  }

  try {
    const response = await axiosRandomUsers.get(`/?results=${amount}`);
    const data = response.data.results;
    const randomUsers: RandomUser[] = [];
    for (let i = 0; i < data.length; i++) {
      const name: string = data[i].name["first"] + " " + data[i].name["last"];
      const thumb: string = data[i].picture[`${thumbSize}`];
      randomUsers.push({ name: name, thumbnail: thumb });
    }
    return randomUsers;
  } catch (error) {
    console.log(error);
  }
};
