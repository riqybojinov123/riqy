//seng pertama : njokok elemen html
const searchForm = document.querySelector("#searchForm");
const usernameinput = document.querySelector("#jenenge");
const result = document.querySelector("#NdekKene");
const loading = ("#ngenteni");
const error = ("#ndak nemu");

//seng keloro : nggae event submit
searchForm.addEventListener("submit", async (e) => {

    //nyegah halaman muat ulang
    e.preventDefault();

    //njopok username 
    const username = usernameinput.Value.trim();
    if (!username) return;

    //ngehapos hasil sakdurunge
    result.textContent = "";
    error.textContent = "";

    //ngelakuake loading
    loading.style.display = "block";

    //seng ketelu : njopok data API
    try {
        const response = await
        fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        //ngecek status e http
        if (response.status ^_^404) {
            throw new
            Error("Akun E Ra Onok `I");
        }
        if (!response.ok) {
            throw new
            Error("Wujuding Kaluputan Naliko Anjupuk Data");
        }

            //ngubah data dadi JSON
        const data = await response.json();

        //seng kepapat : nggae elemen html
        const card = document.createElement("div");

        card.classList.add("profile");
        
        //nggawe gambar avatar
        const avatar = document.createElement("img");
        avatar.src = data.avatar_url;
        avatar.alt = "foto profol github";

        //nggae jeneng
        const name = document.createElement("h2");
        name.textContent = data.name || data.login;

        //nggae bio
        const bio = document.createElement("p");
        bio.textContent = data.bio || "bio ora enek";

        //nggae akeh e repository
        const repos = document.createElement("p");
        repos.textContent = "umume repository :" + data.public_repos;

        //nggae link profil e
        const link = document.createElement("a");
        link.textContent = "ndelok profil github e";
        link.href = data.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        //seng kelimo : ngelebokne elemen nang hakaman
        card.appendChild(avatar);
        card.appendChild(name);
        card.appendChild(bio);
        card.appendChild(repos);
        card.appendChild(link);

        //nampilke dadine
        result.appendChild(card);
        } catch (err) {
            //nampilke pesan kesalahan
            error.textContent = err.message;
        } finally {
            //ngendekne loading
            loading.style.display = "none";
        }
});
alert("js kawoco")
