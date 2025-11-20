# Portfolio Website - FullStack Developer

A beautiful and modern portfolio website built with React, FastAPI, and MongoDB. Features smooth scroll animations, responsive design, and a clean light color palette.

## 🚀 Features

- **Modern Design**: Light color palette with beautiful gradients (blue, indigo, purple)
- **Smooth Animations**: Scroll animations, hover effects, parallax, floating particles
- **Responsive**: Mobile-first design that works on all devices
- **Full Stack**: React frontend with FastAPI backend and MongoDB database
- **Sections**:
  - Hero with parallax effect
  - About with specialty cards
  - Projects showcase with hover effects
  - Skills with animated progress bars
  - Contact form
  - Social media links

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons
- Axios

### Backend
- FastAPI
- MongoDB (Motor - async driver)
- Python 3.x
- Pydantic

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- MongoDB
- Yarn

### Frontend Setup

```bash
cd frontend
yarn install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

Start the frontend:
```bash
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in the backend directory:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
```

Start the backend:
```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The backend will run on `http://localhost:8001`

## 🎨 Customization

### Update Personal Information

Edit `/frontend/src/mockData.js` to update:
- Personal info (name, title, bio, email, social links)
- Projects
- Skills

### Color Scheme

The current design uses a light palette with:
- Blue (#3B82F6)
- Indigo (#6366F1)
- Purple (#A855F7)

To change colors, edit the Tailwind classes in component files or update `tailwind.config.js`.

## 📝 Project Structure

```
portfolio-website/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   ├── mockData.js       # Mock data - UPDATE THIS
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
└── README.md
```

## 🎭 Animations

The portfolio includes various animations:
- **Fade in on scroll**: Elements fade in as you scroll
- **Parallax effect**: Hero section moves at different speed
- **Float animations**: Particles and decorative elements
- **Hover effects**: Cards, buttons, and icons
- **Skill bars**: Animated progress bars
- **Rotating icons**: Social media icons with rotation on hover

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `yarn build`
2. Deploy the `build` folder to Vercel or Netlify
3. Set environment variable: `REACT_APP_BACKEND_URL`

### Backend (Heroku/Railway/DigitalOcean)
1. Deploy the backend directory
2. Set environment variables: `MONGO_URL`, `DB_NAME`
3. Update CORS settings in `server.py` with your frontend URL

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Made with ❤️ using React & FastAPI**