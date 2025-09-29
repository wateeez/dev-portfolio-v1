<?php

// ==============================================
// LARAVEL PORTFOLIO BACKEND STRUCTURE
// ==============================================

// 1. DATABASE MIGRATIONS
// ==============================================

// database/migrations/2024_01_01_000001_create_portfolios_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('image_url');
            $table->string('category'); // fullstack, frontend, backend, mobile
            $table->json('technologies'); // ['Laravel', 'MySQL', 'jQuery']
            $table->string('role');
            $table->string('results')->nullable();
            $table->string('live_url')->nullable();
            $table->string('github_url')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('portfolios');
    }
};

// database/migrations/2024_01_01_000002_create_contacts_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('subject')->nullable();
            $table->text('message');
            $table->string('ip_address')->nullable();
            $table->string('user_agent')->nullable();
            $table->boolean('is_read')->default(false);
            $table->timestamp('replied_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('contacts');
    }
};

// database/migrations/2024_01_01_000003_create_experiences_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('company');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->text('description');
            $table->json('technologies')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_current')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('experiences');
    }
};

// database/migrations/2024_01_01_000004_create_testimonials_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('client_name');
            $table->string('client_role');
            $table->string('client_company');
            $table->text('content');
            $table->string('avatar_url')->nullable();
            $table->integer('rating')->default(5);
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('testimonials');
    }
};

// ==============================================
// 2. ELOQUENT MODELS
// ==============================================

// app/Models/Portfolio.php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_url',
        'category',
        'technologies',
        'role',
        'results',
        'live_url',
        'github_url',
        'is_featured',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'technologies' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }
}

// app/Models/Contact.php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
        'ip_address',
        'user_agent',
        'is_read',
        'replied_at'
    ];

    protected $casts = [
        'is_read' => 'boolean',
        'replied_at' => 'datetime',
    ];

    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    public function markAsRead()
    {
        $this->update(['is_read' => true]);
    }
}

// app/Models/Experience.php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'company',
        'start_date',
        'end_date',
        'description',
        'technologies',
        'sort_order',
        'is_current'
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'technologies' => 'array',
        'is_current' => 'boolean',
    ];

    public function scopeCurrent($query)
    {
        return $query->where('is_current', true);
    }

    public function getFormattedPeriodAttribute()
    {
        $start = $this->start_date->format('M Y');
        $end = $this->is_current ? 'Present' : $this->end_date->format('M Y');
        return "$start - $end";
    }
}

// app/Models/Testimonial.php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_name',
        'client_role',
        'client_company',
        'content',
        'avatar_url',
        'rating',
        'is_featured',
        'is_active'
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}

// ==============================================
// 3. API CONTROLLERS
// ==============================================

// app/Http/Controllers/Api/PortfolioController.php
<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        $query = Portfolio::active()->orderBy('sort_order');

        if ($request->has('category') && $request->category !== 'all') {
            $query->byCategory($request->category);
        }

        if ($request->has('featured')) {
            $query->featured();
        }

        $portfolios = $query->get();

        return response()->json([
            'success' => true,
            'data' => $portfolios
        ]);
    }

    public function show($id)
    {
        $portfolio = Portfolio::active()->findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $portfolio
        ]);
    }
}

// app/Http/Controllers/Api/ContactController.php
<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactFormMail;
use App\Notifications\NewContactNotification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {
        try {
            // Rate limiting check
            $ip = $request->ip();
            $recentContacts = Contact::where('ip_address', $ip)
                ->where('created_at', '>=', now()->subHour())
                ->count();
                
            if ($recentContacts >= 3) {
                return response()->json([
                    'success' => false,
                    'message' => 'Too many requests. Please try again later.'
                ], 429);
            }

            // Create contact record
            $contact = Contact::create([
                'name' => $request->name,
                'email' => $request->email,
                'subject' => $request->subject,
                'message' => $request->message,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            // Send email notification
            Mail::to(config('mail.admin_email', 'alex@developer.com'))
                ->send(new ContactFormMail($contact));

            // Send auto-reply to sender
            Mail::to($contact->email)
                ->send(new \App\Mail\ContactAutoReplyMail($contact));

            return response()->json([
                'success' => true,
                'message' => 'Message sent successfully! I\'ll get back to you soon.',
                'data' => [
                    'id' => $contact->id,
                    'created_at' => $contact->created_at
                ]
            ]);

        } catch (\Exception $e) {
            \Log::error('Contact form error: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again later.'
            ], 500);
        }
    }
}

// app/Http/Controllers/Api/ExperienceController.php
<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::orderBy('start_date', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $experiences
        ]);
    }
}

// app/Http/Controllers/Api/TestimonialController.php
<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::active()
            ->featured()
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $testimonials
        ]);
    }
}

// ==============================================
// 4. FORM REQUESTS (VALIDATION)
// ==============================================

// app/Http/Requests/ContactRequest.php
<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|min:2|max:100',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:200',
            'message' => 'required|string|min:10|max:2000',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name is required.',
            'name.min' => 'Name must be at least 2 characters.',
            'email.required' => 'Email address is required.',
            'email.email' => 'Please enter a valid email address.',
            'message.required' => 'Message is required.',
            'message.min' => 'Message must be at least 10 characters.',
            'message.max' => 'Message cannot exceed 2000 characters.',
        ];
    }
}

// ==============================================
// 5. MAIL CLASSES
// ==============================================

// app/Mail/ContactFormMail.php
<?php
namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('New Contact Form Submission - ' . $this->contact->subject)
                    ->view('emails.contact-form')
                    ->with([
                        'contactName' => $this->contact->name,
                        'contactEmail' => $this->contact->email,
                        'contactSubject' => $this->contact->subject,
                        'contactMessage' => $this->contact->message,
                        'submittedAt' => $this->contact->created_at->format('M j, Y g:i A'),
                    ]);
    }
}

// app/Mail/ContactAutoReplyMail.php
<?php
namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactAutoReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('Thank you for contacting me!')
                    ->view('emails.contact-auto-reply')
                    ->with([
                        'contactName' => $this->contact->name,
                    ]);
    }
}

// ==============================================
// 6. EMAIL TEMPLATES (Blade Views)
// ==============================================

// resources/views/emails/contact-form.blade.php
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; }
        .info-row { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .message-box { background: white; padding: 15px; border-radius: 5px; margin-top: 15px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="info-row">
                <span class="label">Name:</span> {{ $contactName }}
            </div>
            <div class="info-row">
                <span class="label">Email:</span> {{ $contactEmail }}
            </div>
            <div class="info-row">
                <span class="label">Subject:</span> {{ $contactSubject ?: 'No subject' }}
            </div>
            <div class="info-row">
                <span class="label">Submitted:</span> {{ $submittedAt }}
            </div>
            
            <div class="message-box">
                <div class="label">Message:</div>
                <p>{{ $contactMessage }}</p>
            </div>
        </div>
    </div>
</body>
</html>

// resources/views/emails/contact-auto-reply.blade.php
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank You - Message Received</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; border-radius: 5px 5px 0 0; text-align: center; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 5px 5px; }
        .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Thank You for Your Message!</h2>
        </div>
        <div class="content">
            <p>Hi {{ $contactName }},</p>
            
            <p>Thank you for reaching out! I've received your message and will get back to you within 24-48 hours.</p>
            
            <p>In the meantime, feel free to:</p>
            <ul>
                <li>Check out my portfolio at <a href="https://alexdeveloper.com">alexdeveloper.com</a></li>
                <li>Connect with me on <a href="https://linkedin.com/in/alexdeveloper">LinkedIn</a></li>
                <li>Follow my work on <a href="https://github.com/alexdeveloper">GitHub</a></li>
            </ul>
            
            <p>Looking forward to discussing your project!</p>
            
            <div class="signature">
                <p>Best regards,<br>
                <strong>Alex Developer</strong><br>
                Full-Stack Developer & UI/UX Designer<br>
                📧 alex@developer.com<br>
                🌐 alexdeveloper.com</p>
            </div>
        </div>
    </div>
</body>
</html>

// ==============================================
// 7. API ROUTES
// ==============================================

// routes/api.php
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\TestimonialController;

Route::middleware('api')->group(function () {
    // Portfolio endpoints
    Route::get('/portfolio', [PortfolioController::class, 'index']);
    Route::get('/portfolio/{id}', [PortfolioController::class, 'show']);
    
    // Contact endpoint
    Route::post('/contact', [ContactController::class, 'store']);
    
    // Experience endpoint
    Route::get('/experience', [ExperienceController::class, 'index']);
    
    // Testimonials endpoint
    Route::get('/testimonials', [TestimonialController::class, 'index']);
});

// Public API for frontend
Route::prefix('public')->group(function () {
    Route::get('/portfolio', [PortfolioController::class, 'index']);
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::get('/experience', [ExperienceController::class, 'index']);
});

// ==============================================
// 8. DATABASE SEEDERS
// ==============================================

// database/seeders/PortfolioSeeder.php
<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfolioSeeder extends Seeder
{
    public function run()
    {
        $portfolios = [
            [
                'title' => 'E-Commerce Platform',
                'description' => 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
                'image_url' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
                'category' => 'fullstack',
                'technologies' => ['Laravel', 'MySQL', 'jQuery', 'Stripe', 'Bootstrap'],
                'role' => 'Full-Stack Developer',
                'results' => '40% increase in conversion rate',
                'live_url' => 'https://demo-ecommerce.com',
                'github_url' => 'https://github.com/alexdev/ecommerce',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Analytics Dashboard',
                'description' => 'Modern dashboard with data visualization and real-time updates for business intelligence.',
                'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
                'category' => 'frontend',
                'technologies' => ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'API'],
                'role' => 'Frontend Developer',
                'results' => '60% faster decision making',
                'live_url' => 'https://demo-dashboard.com',
                'github_url' => 'https://github.com/alexdev/dashboard',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'REST API System',
                'description' => 'Scalable REST API with authentication, rate limiting, and comprehensive documentation.',
                'image_url' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
                'category' => 'backend',
                'technologies' => ['Laravel', 'JWT', 'MySQL', 'Redis', 'Swagger'],
                'role' => 'Backend Developer',
                'results' => '1000+ API calls per minute',
                'live_url' => 'https://api-docs.demo.com',
                'github_url' => 'https://github.com/alexdev/api-system',
                'is_featured' => false,
                'sort_order' => 3,
            ],
        ];

        foreach ($portfolios as $portfolio) {
            Portfolio::create($portfolio);
        }
    }
}

// database/seeders/ExperienceSeeder.php
<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Experience;

class ExperienceSeeder extends Seeder
{
    public function run()
    {
        $experiences = [
            [
                'title' => 'Senior Full-Stack Developer',
                'company' => 'TechCorp Inc.',
                'start_date' => '2022-01-01',
                'end_date' => null,
                'description' => 'Lead development of enterprise applications serving 100K+ users. Architect scalable solutions and mentor junior developers.',
                'technologies' => ['Laravel', 'React', 'MySQL', 'AWS', 'Docker'],
                'sort_order' => 1,
                'is_current' => true,
            ],
            [
                'title' => 'Frontend Developer',
                'company' => 'StartupXYZ',
                'start_date' => '2020-03-01',
                'end_date' => '2021-12-31',
                'description' => 'Built responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UIs.',
                'technologies' => ['React', 'TypeScript', 'CSS3', 'Jest'],
                'sort_order' => 2,
                'is_current' => false,
            ],
        ];

        foreach ($experiences as $experience) {
            Experience::create($experience);
        }
    }
}

// database/seeders/TestimonialSeeder.php
<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run()
    {
        $testimonials = [
            [
                'client_name' => 'Sarah Johnson',
                'client_role' => 'Product Manager',
                'client_company' => 'TechCorp Inc.',
                'content' => 'Exceptional developer who consistently delivers high-quality solutions. Their attention to detail and problem-solving skills are outstanding.',
                'avatar_url' => 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
                'rating' => 5,
                'is_featured' => true,
            ],
            [
                'client_name' => 'Michael Chen',
                'client_role' => 'CTO',
                'client_company' => 'StartupXYZ',
                'content' => 'A reliable team player who brings innovative ideas and technical expertise. Always goes above and beyond to ensure project success.',
                'avatar_url' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
                'rating' => 5,
                'is_featured' => true,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}

// ==============================================
// 9. CONFIGURATION FILES
// ==============================================

// config/cors.php (for API access)
<?php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // Configure for production
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];

// .env configuration
/*
APP_NAME="Alex Developer Portfolio"
APP_ENV=production
APP_KEY=base64:your-app-key-here
APP_DEBUG=false
APP_URL=https://alexdeveloper.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=portfolio_user
DB_PASSWORD=secure_password

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=alex@developer.com
MAIL_FROM_NAME="Alex Developer"

# Admin email for contact form notifications
MAIL_ADMIN_EMAIL=alex@developer.com

# Google Analytics
GOOGLE_ANALYTICS_ID=GA_TRACKING_ID

# Rate limiting
CONTACT_FORM_RATE_LIMIT=3
*/

// ==============================================
// 10. ADMIN PANEL CONTROLLER (Optional)
// ==============================================

// app/Http/Controllers/Admin/DashboardController.php
<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Models\Contact;
use App\Models\Experience;
use App\Models\Testimonial;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth'); // Add authentication middleware
    }

    public function index()
    {
        $stats = [
            'total_portfolios' => Portfolio::count(),
            'active_portfolios' => Portfolio::active()->count(),
            'total_contacts' => Contact::count(),
            'unread_contacts' => Contact::unread()->count(),
            'total_experiences' => Experience::count(),
            'total_testimonials' => Testimonial::count(),
        ];

        $recent_contacts = Contact::latest()->take(5)->get();

        return view('admin.dashboard', compact('stats', 'recent_contacts'));
    }
}

// ==============================================
// 11. DEPLOYMENT COMMANDS
// ==============================================

/*
# Laravel setup commands
composer install --optimize-autoloader --no-dev
php artisan key:generate
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force
php artisan db:seed

# File permissions
chmod -R 755 /var/www/portfolio
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data /var/www/portfolio

# Nginx configuration
server {
    listen 80;
    server_name alexdeveloper.com;
    root /var/www/portfolio/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
*/