"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  let storyClass = "no-login";

  let deleteButton = "";
  // Simple logic test to check login then check favorites
  if(currentUser){
    storyClass = "unfavorited";
    if(currentUser.favorites.find((stry)=> stry.storyId === story.storyId)){
      storyClass = "favorited";
    }
    if(currentUser.ownStories.find((stry)=> stry.storyId === story.storyId)){
      deleteButton = `<img src="../imgs/delete.png" class="delete-button"></img>`
    }
  }


  // Added storyClass to prevent cluttering established code
  //with more lines of DOM alteration or strenous markup additions//
  return $(`
      <li id="${story.storyId}" class="${storyClass}">
        <img src="./imgs/${storyClass}.png" class="story-icon">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>${deleteButton}
        <small class="story-user">posted by ${story.username}</small>
      </li>
      <hr>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
    $(".delete-button").hide();
  }

  $allStoriesList.show();


  // Applying Listeners to Story Elements
  $deleteButtonHover();
  $unfavedHover();
  $deleteButtonClick();
  $faveIconClick();
}


async function submitStory(evt){
  console.debug("submitStory", evt);
  evt.preventDefault();

  const author = $("#story-author").val();
  const title = $("#story-title").val();
  const url = $("#story-url").val()

  // Grab form information to create object to pass
  const submission = {
    author,
    title,
    url,
  };

  // Error Catching Before API Call
  if(!author || !title || !url){
    return alert("You must fill out all three fields to submit your story!")
  };

  if(url.slice(0,11) !== 'http://www.'){
    return alert("The URL must start with 'http://www.'!")
  }

  // API Call
  const res = await storyList.addStory(currentUser, submission);

  // $allStoriesList.prepend(generateStoryMarkup(res));

  $storyForm.trigger("reset");

  $storyForm.hide();
  // $allStoriesList.show();
  putStoriesOnPage();

}

$storyForm.on("submit", submitStory)


const $deleteButtonHover = ()=>{$("li img.delete-button").parent().hover( function(){
  $(this).children("img.delete-button").show()
}, function(){
  $(this).children("img.delete-button").hide()
})}

const $unfavedHover = ()=>{$(".unfavorited .story-icon").hover( function(){
  $(this).attr("src", "./imgs/favorited.png")
}, function(){
  $(this).attr("src", "./imgs/unfavorited.png")
})}

const $deleteButtonClick = ()=>{$(".delete-button").on("click", function(){
  const $parent = $(this).parent();
  const $id = $parent.attr("id");

  // removes the Horizontal Line Underneath the List Item
  $parent.next().remove();
  $parent.remove();
  deleteStory($id);
})}

const $faveIconClick = ()=>{$(".story-icon").on("click", function(){

  let img = 'favorited.png';
  const $parent = $(this).parent();
  const $currentClass = $parent.attr('class');
  $parent.removeClass('unfavorited').addClass('favorited');
  
  if($currentClass === 'favorited'){
    img = 'unfavorited.png';
      
    $parent.removeClass('favorited').addClass('unfavorited');
  }
  // $(this).attr("src", `../imgs/${img}`); 
  return currentUser.toggleFavorite($parent.attr('id'), $currentClass)
})}
