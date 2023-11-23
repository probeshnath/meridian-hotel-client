import axios from 'axios'
export const imageUpload = async image =>{
    // image host
    const formData = new FormData()
    formData.append('image', image)

      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_API_KEY}`, formData)
    //   console.log("first data", data)
   
      return data;
}