const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';
const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(time) {
  const pastTime = new Date(time);
  const timeNow = new Date();

  const diffMs = timeNow - pastTime;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }

}

function viewCount(postViews) {
  if (postViews >= 1000) {
    const totalView = Math.floor(postViews / 1000)
    return `${totalView}k`;
  }
  return postViews;
}

function forumCategory(idCategory) {
  for (const [id, data] of Object.entries(allCategories)) {
    if (idCategory == id) {
      return `<a class="category ${data.className}" href="${forumCategoryUrl}${data.className}/${idCategory}">${data.category}</a>`;
    }
  }
  return `<a class="category general" href="${forumCategoryUrl}general/${idCategory}">General</a>`;
}

function avatars(posters, users) {
  let listImg = "";

  for (let i = 0; i < posters.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (posters[i].user_id === users[j].id) {
        const newUrl = (users[j].avatar_template).replace("{size}", 30);
        const userAvatarUrl = newUrl.startsWith("http")
          ? newUrl
          : `${avatarUrl}${newUrl}`;

        listImg += `<img alt="${users[j].name}" src="${userAvatarUrl}"/>\n`;
      }
    }
  }

  return listImg;
}

function showLatestPosts(data) {
  const dataUsers = data.users
  const dataTopics = data.topic_list
  for (const [id, data] of Object.entries(dataTopics.topics)) {
    const tr = document.createElement('tr');
    tr.innerHTML += `
      <td id=${data.id}>
        <a class="post-title" href="${forumTopicUrl}${data.slug}/${data.id}">${data.title}</a>
        ${forumCategory(data.category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(data.posters, dataUsers)}
        </div>
      </td>
      <td>${data.posts_count - 1}</td>
      <td>${viewCount(data.views)}</td>
      <td>${timeAgo(data.bumped_at)}</td>
    `;
    postsContainer.appendChild(tr);
  }
  return postsContainer;
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest)
    const data = await res.json()
    showLatestPosts(data)

  } catch (erro) {
    console.error(erro)
  }

}

fetchData()
