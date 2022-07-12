export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '85f19a10e8mshcb63bf46fa0fe3cp12263cjsn6f00dfa458d6'
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '85f19a10e8mshcb63bf46fa0fe3cp12263cjsn6f00dfa458d6'
        
    },
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    console.log(response)
    const data = await response.json();
    console.log(data)

    return data;
  };
