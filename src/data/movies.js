import untamed from "../assets/movies/The Untamed.jpg";
import together from "../assets/movies/2gether.jpg";
import semantic from "../assets/movies/Semantic Error.jpg";
import kinnporsche from "../assets/movies/KinnPorsche.jpg";

const movies = [
  {
    id: 1,
    title: "The Untamed",
    image: untamed,

    type: "Phim bộ",

    genre: "Cổ trang",
    country: "Trung Quốc",

    rating: 4.8,
    year: 2019,
    episodes: 50,
    duration: "45 phút",

    director: "Trần Gia Lâm",
    actors: "Tiêu Chiến, Vương Nhất Bác",

    description:
      "The Untamed kể về hành trình của Ngụy Vô Tiện và Lam Vong Cơ cùng nhau khám phá những bí mật của tiên môn.",

    episodesList: [
      {
        id: 1,
        title: "Tập 1",
        video: "/videos/untamed/episode1.mp4",
      },
      {
        id: 2,
        title: "Tập 2",
        video: "/videos/untamed/episode2.mp4",
      },
      {
        id: 3,
        title: "Tập 3",
        video: "/videos/untamed/episode3.mp4",
      },
    ],
  },

  {
    id: 2,
    title: "2gether",
    image: together,

    type: "Phim bộ",

    genre: "BL",
    country: "Thái Lan",

    rating: 4.5,
    year: 2020,
    episodes: 13,
    duration: "45 phút",

    director: "Weerachit Thongjila",
    actors: "Bright Vachirawit, Win Metawin",

    description:
      "Chuyện tình của Sarawat và Tine bắt đầu từ một lời nhờ giả làm người yêu.",

    episodesList: [
      {
        id: 1,
        title: "Tập 1",
        video: "/videos/together/episode1.mp4",
      },
      {
        id: 2,
        title: "Tập 2",
        video: "/videos/together/episode2.mp4",
      },
    ],
  },

  {
    id: 3,
    title: "Semantic Error",
    image: semantic,

    type: "Phim bộ",

    genre: "BL",
    country: "Hàn Quốc",

    rating: 4.4,
    year: 2022,
    episodes: 8,
    duration: "30 phút",

    director: "Kim Soo Jung",
    actors: "Park Seo Ham, Park Jae Chan",

    description:
      "Bộ phim BL nổi tiếng kể về cuộc gặp gỡ giữa Chu Sang Woo và Jang Jae Young.",

    episodesList: [
      {
        id: 1,
        title: "Tập 1",
        video: "/videos/semantic/episode1.mp4",
      },
      {
        id: 2,
        title: "Tập 2",
        video: "/videos/semantic/episode2.mp4",
      },
    ],
  },

  {
    id: 4,
    title: "KinnPorsche",
    image: kinnporsche,

    type: "Phim bộ",

    genre: "BL",
    country: "Thái Lan",

    rating: 4.5,
    year: 2022,
    episodes: 14,
    duration: "60 phút",

    director: "Khom Kongkiat Khomsiri",
    actors: "Mile Phakphum, Apo Nattawin",

    description:
      "KinnPorsche kể về mối quan hệ giữa Kinn và Porsche trong thế giới mafia đầy kịch tính.",

    episodesList: [
      {
        id: 1,
        title: "Tập 1",
        video: "/videos/kinnporsche/episode1.mp4",
      },
      {
        id: 2,
        title: "Tập 2",
        video: "/videos/kinnporsche/episode2.mp4",
      },
    ],
  },
  {
    id: 5,
    title: "Nhân Duyên Tiền Định",
    image: together,

    type: "Phim bộ",

    genre: "BL",
    country: "Thái Lan",

    rating: 4.5,
    year: 2026,
    episodes: 13,
    duration: "45 phút",

    director: "Weerachit Thongjila",
    actors: " Anna Sueangam-iam / August Vachiravit / Fay Chintub / Gunner Natsakan / Ice Panuwat / Jaturong Mokjok / Leng Thanaphon / Luke Ishikawa / Na Naphat / Pom Kwantip / Thisa Varitthisa / Thun Thunyatorn / Toni Rakkaen / Vin Tanapon / Win Mawin",

    description:
      "Great là một bác sĩ phẫu thuật hiện đại, lạc quan, sống ở năm 2025 và luôn sẵn lòng giúp đỡ mọi người. Sau một tai nạn bất ngờ, anh tỉnh dậy trong thân xác của Phor Kaew, một người đàn ông sống ở quá khứ và bị tất cả người dân Ayutthaya khinh ghét.Không thể tìm được cách quay trở về hiện tại, Great buộc phải tiếp tục sống với thân phận của Kaew. Bằng chính con người thật của mình cùng tấm lòng chân thành, anh dần chinh phục được những người xung quanh và từng bước thay đổi số phận vốn đầy định kiến của Phor Kaew.",

    episodesList: [
      {
        id: 1,
        title: "Tập 1",
        video: "/videos/together/episode1.mp4",
      },
      {
        id: 2,
        title: "Tập 2",
        video: "/videos/together/episode2.mp4",
      },
    ],
  },
  {
    id: 6,
    title: "Cam Ở Nhà Họ Nhưng Cứ Rơi Sang Nhà Mình Suốt",
    image: together,

    type: "Phim bộ",

    genre: "BL",
    country: "Thái Lan",

    rating: 4.5,
    year: 2026,
    episodes: 13,
    duration: "45 phút",

    director: "Weerachit Thongjila",
    actors: " Almond Poomsuwan / Justin Angus / Keaton Sitthithat / Ken Kanthee / Paul Tanan / Progress Passawish",

    description:
      "Ko là một cậu bé mê cam hơn bất cứ thứ gì trên đời – nhưng không phải cam nào cậu cũng thích. Nhất định phải là cam từ cây ở nhà bên cạnh mới được. Không có loại cam nào ngon bằng, cũng chẳng có loại nào khiến cậu hạnh phúc đến thế. Thơm, ngọt, ngon lành – mọi thứ về những quả cam nhà trồng ấy, Ko đều yêu thích vô cùng. Chỉ có một điều ngoại lệ: chủ nhân thật sự của cây cam đó. Cậu con trai mang cái tên ngầu y hệt tên cậu. Vì hai người trùng tên nên mọi người gọi cậu ta là “Ko Hai”, theo cách gọi quen thuộc mỗi khi có hai người cùng tên. Và thế là Ko nghiễm nhiên trở thành “Ko Một”. Nhưng ngoài cái tên giống nhau ra, cả hai chẳng có điểm gì chung. Tính cách trái ngược hoàn toàn – như thể ông trời đã phái một vị thần tối cao xuống để trừng trị con quỷ cam tinh nghịch vậy. Trong lúc câu chuyện của hai Ko dần mở ra, họ cũng lớn lên – không chỉ về dáng hình mà cả những cảm xúc âm thầm nảy nở trong tim.",

    episodesList: [
      {
        id: 1,
        title: "Tập 1",
        video: "/videos/together/episode1.mp4",
      },
      {
        id: 2,
        title: "Tập 2",
        video: "/videos/together/episode2.mp4",
      },
    ],
  },
];

export default movies;