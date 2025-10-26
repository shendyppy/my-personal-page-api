# My Personal Page API

A NestJS backend API that provides dynamic data for my portfolio website. Built with NestJS, Prisma, and PostgreSQL.

## Tech Stack

- **Framework**: NestJS (Node.js framework)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Language**: TypeScript
- **Validation**: class-validator & class-transformer

## Project Structure

```
my-personal-page-api/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── about/                 # About section module
│   │   ├── dto/
│   │   ├── about.controller.ts
│   │   ├── about.service.ts
│   │   └── about.module.ts
│   ├── experiences/           # Work experiences module
│   │   ├── dto/
│   │   ├── experiences.controller.ts
│   │   ├── experiences.service.ts
│   │   └── experiences.module.ts
│   ├── hero/                  # Hero section module
│   │   ├── dto/
│   │   ├── hero.controller.ts
│   │   ├── hero.service.ts
│   │   └── hero.module.ts
│   ├── projects/              # Projects module
│   │   ├── dto/
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   └── projects.module.ts
│   ├── skills/                # Skills module
│   │   ├── dto/
│   │   ├── skills.controller.ts
│   │   ├── skills.service.ts
│   │   └── skills.module.ts
│   ├── prisma/                # Prisma service
│   │   ├── prisma.service.ts
│   │   └── prisma.module.ts
│   ├── app.module.ts          # Root module
│   └── main.ts                # Application entry point
├── .env                       # Environment variables
├── nest-cli.json              # NestJS CLI config
├── tsconfig.json              # TypeScript config
└── package.json
```

## Database Schema

### Models Overview

1. **Project** - Portfolio projects with highlights and images
2. **ProjectHighlight** - Project features/highlights
3. **ProjectImage** - Images for each highlight
4. **Skill** - Technical skills with categories
5. **Experience** - Work experience entries
6. **About** - About section content
7. **SocialLink** - Social media links
8. **TechStack** - Technology stack items
9. **Love** - Personal interests with clubs
10. **Hero** - Hero section bio
11. **Trait** - Hero section traits/badges

### Key Features

- UUID primary keys for all models
- Enums for `SkillCategory` (Frontend, Backend, DevOps, Database) and `TraitType`
- Cascade deletes for nested relations
- Timestamps (createdAt, updatedAt) on all models
- Array fields for dynamic content (impact, responsibilities, projects)

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `env.example` to `.env` and update with your database credentials:

```bash
# Database Configuration
DATABASE_URL="postgresql://postgres:postgresql@localhost:5432/my-personal-page?schema=public"

# Server Configuration
PORT=4000

# Frontend URL (for CORS)
FRONTEND_URL="http://localhost:3000"
```

### 3. Create Database

Make sure PostgreSQL is running and create the database:

```bash
# Using PostgreSQL CLI
createdb my-personal-page

# Or using psql
psql -U postgres
CREATE DATABASE "my-personal-page";
```

### 4. Run Prisma Migrations

Generate Prisma Client and run migrations:

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations to create tables
npm run prisma:migrate
```

When prompted, name your migration (e.g., "init" for the first migration).

### 5. (Optional) Seed Database

You can manually add data via Prisma Studio:

```bash
npm run prisma:studio
```

This opens a GUI at `http://localhost:5555` where you can add your portfolio data.

## Running the Application

### Development Mode

```bash
# Using nodemon
npm run dev

# Or using NestJS CLI with watch mode
npm run start:dev
```

Server will start at `http://localhost:4000`

### Production Mode

```bash
# Build the project
npm run build

# Start production server
npm run start:prod
```

## API Endpoints

All endpoints are prefixed with `/api`

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:slug` - Get project by slug
- `POST /api/projects` - Create new project
- `PATCH /api/projects/:slug` - Update project
- `DELETE /api/projects/:slug` - Delete project

### Skills

- `GET /api/skills` - Get all skills (optional query: `?category=Frontend`)
- `GET /api/skills/:id` - Get skill by ID
- `POST /api/skills` - Create new skill
- `PATCH /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experiences

- `GET /api/experiences` - Get all experiences (ordered by current)
- `GET /api/experiences/:id` - Get experience by ID
- `POST /api/experiences` - Create new experience
- `PATCH /api/experiences/:id` - Update experience
- `DELETE /api/experiences/:id` - Delete experience

### About

- `GET /api/about` - Get about information
- `POST /api/about` - Create about information
- `PATCH /api/about/:id` - Update about information
- `GET /api/about/social-links` - Get social links
- `GET /api/about/tech-stacks` - Get tech stacks
- `GET /api/about/loves` - Get personal interests

### Hero

- `GET /api/hero` - Get hero information
- `POST /api/hero` - Create hero information
- `PATCH /api/hero/:id` - Update hero information
- `GET /api/hero/traits` - Get hero traits

## Example API Requests

### Create a Project

```bash
POST /api/projects
Content-Type: application/json

{
  "slug": "project-name",
  "title": "My Project",
  "description": "A brief description",
  "image": "/images/project.png",
  "company": "Company Name",
  "overview": "Detailed overview of the project",
  "scope": "Project scope",
  "industry": "Tech Industry",
  "highlights": [
    {
      "highlightId": "highlight-1",
      "title": "Feature Name",
      "description": "Feature description",
      "impact": ["Impact 1", "Impact 2"],
      "link": "https://example.com",
      "images": [
        {
          "link": "/images/feature.png",
          "scrollable": false
        }
      ]
    }
  ]
}
```

### Get Skills by Category

```bash
GET /api/skills?category=Frontend
```

### Create a Skill

```bash
POST /api/skills
Content-Type: application/json

{
  "name": "React.js",
  "level": 90,
  "category": "Frontend",
  "logo": "/logos/react.svg",
  "model": "/models/react.glb",
  "color": "#61DAFB"
}
```

## Migration from Frontend Static Data

Your frontend currently has data in these files:
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/experiences.ts`
- `src/data/about.ts`
- `src/data/hero.ts`

To migrate this data:

1. Use Prisma Studio to manually add data:
   ```bash
   npm run prisma:studio
   ```

2. Or create a seed script to automatically populate the database with your existing data

3. Update your frontend to fetch from API endpoints instead of importing static files

## Validation & Error Handling

All endpoints include:
- DTO validation using class-validator
- Automatic data transformation
- Proper error responses (404, 400, etc.)
- CORS enabled for frontend communication

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run start:dev` - Start development with NestJS watch mode
- `npm run start:debug` - Start with debug mode
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio GUI

## Next Steps

### Future Enhancements

1. **JWT Authentication**
   - Add `@nestjs/jwt` and `@nestjs/passport`
   - Create auth module with login/register
   - Protect admin endpoints with JWT guards

2. **Admin Panel**
   - Create admin routes for managing content
   - Add role-based access control (RBAC)
   - Build admin UI or integrate with existing admin framework

3. **Data Seeding**
   - Create seed script to populate database from frontend data
   - Add `prisma/seed.ts` for automated data initialization

4. **Testing**
   - Add unit tests with Jest
   - Add e2e tests for API endpoints
   - Add test database setup

5. **Deployment**
   - Set up CI/CD pipeline
   - Deploy to Vercel/Railway/Render
   - Configure production database (e.g., Supabase, Neon)

6. **Additional Features**
   - File upload for images (using multer or S3)
   - Image optimization
   - API rate limiting
   - Caching with Redis
   - Full-text search

## Troubleshooting

### Database Connection Issues

```bash
# Test PostgreSQL connection
psql -U postgres -d my-personal-page

# Check if PostgreSQL is running
# Windows: services.msc (look for PostgreSQL)
# Mac: brew services list
# Linux: systemctl status postgresql
```

### Prisma Issues

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Format schema
npx prisma format

# View database in browser
npm run prisma:studio
```

### Port Already in Use

If port 4000 is in use, update the `PORT` in `.env` file.

## Contributing

Feel free to submit issues or pull requests!

## License

ISC
