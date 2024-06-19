// Posting New Story Axios Skeleton
const response = await axios({
    method: "POST",
    url: `${BASE_URL}/stories`,
    data: {"token": `${localStorage.getItem('token')}`,
        "story": {"author": `${currentUser.username}`,
        "title": `Can You Believe This Story? I Can't`,
        "url":"https://www.google.com"
    }},
  });


// async deleteStory(storyID){
//     const response = await axios({
//         method: "POST",
//         url: `${BASE_URL}/stories/${storyID}`,
//         data: {"token": localStorage.getItem('token')}
//     })
// }

// : 
// Story {storyId: '0a4741dd-9e97-4532-b0ec-dabef7c7b59a', title: 'Test', author: 'Me', url: 'http://meow.com', username: 'newUser01', …}
// 1
// : 
// Story {storyId: 'e785491b-62f7-4c97-b4d4-eae2ec870590', title: 'Test', author: 'Me', url: 'http://meow.com', username: 'newUser01', …}
// 2
// : 
// Story {storyId: 'e20dc289-2fc3-497e-bd6c-28418f973e91', title: 'Test', author: 'Me', url: 'http://meow.com', username: 'newUser01', …}
// 3
// : 
// Story {storyId: '0444ce15-db0a-4039-ad12-b001b627a00d', title: 'Test', author: 'Me', url: 'http://meow.com', username: 'newUser01', …}
// 4
// : 
// Story {storyId: 'c1dd8e43-d349-4e9d-8e13-4a2adc28b47c', title: 'Test', author: 'Me', url: 'http://meow.com', username: 'newUser01', …}
// 5
// : 
// Story {storyId: 'e4acb8bd-61fb-45ae-a1b4-3e3242262577', title: 'Test', author: 'Me', url: 'http://meow.com', username: 'newUser01', …}
// 6
// : 
// Story {storyId: 'b4bcb62e-36e1-4d89-9e17-e065b3c34f27', title: "Springboard's latest news!", author: 'Elie Schoppik', url: 'https://www.springboard.com/', username: 'KendraMc14', …}
// 7
// : 
// Story {storyId: '2b308249-2dfb-4156-8249-592292475166', title: '‘Buffett Indicator’ Warns Stocks Doomed for Worse Crash Than 2008', author: 'Elie Schoppik', url: 'https://www.ccn.com/buffett-indicator-warns-stocks-doomed-worse-crash-than-2008/', username: 'KendraMc14', …}
// 8
// : 
// Story {storyId: '4dc4daad-3e0d-4eee-8c4e-47d8b3b18fd1', title: 'NES Emulator in Rust', author: 'Elie Schoppik', url: 'https://github.com/spieglt/nestur', username: 'KendraMc14', …}
// 9
// : 
// Story {storyId: '0c95443c-4072-495e-939a-db94b70cbaaa', title: 'Google!', author: 'Elie Schoppik', url: 'https://www.google.com', username: 'KendraMc14', …}
// 10
// : 
// Story {storyId: 'd6ac1f59-d02d-43c4-bccc-c199a6eb3b6b', title: 'Ottawa Library fines people using unreliable automatic calling system (1994)', author: 'Elie Schoppik', url: 'http://catless.ncl.ac.uk/Risks/16.54.html#subj2', username: 'KendraMc14', …}
// 11
// : 
// Story {storyId: '2e6b4425-1342-463e-b503-3ad77a2be52e', title: 'Stock Picks from Space (2019)', author: 'Elie Schoppik', url: 'https://www.theatlantic.com/magazine/archive/2019/05/stock-value-satellite-images-investing/586009/', username: 'KendraMc14', …}
// 12
// : 
// Story {storyId: '83e26a3e-f4cf-4981-aad6-6e220f2fa1f2', title: 'Products I w