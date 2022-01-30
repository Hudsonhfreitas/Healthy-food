import axios from "axios";

const getCep = async (cep: string) => {
  
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
        headers: {
            "Content-Type": "application/json",
          },
    });

  return response.data;
};

export default getCep