---
title: "Mis Habilidades Técnicas - Stack de Desarrollo"
date: 2025-01-19
draft: false
description: "Resumen completo de mis competencias técnicas, herramientas y tecnologías dominadas"
tags: ["skills", "tecnología", "programación", "desarrollo"]
categories: ["Perfil Profesional"]
authors:
  - "kathyaperez"
showTableOfContents: true
---

## 💻 Mi Arsenal Tecnológico

Como estudiante de Ingeniería en Desarrollo de Software, he construido un sólido conjunto de habilidades técnicas que me permiten abordar proyectos completos desde el frontend hasta el backend. Aquí te muestro las tecnologías que domino y cómo las aplico en mis proyectos.

## 🎯 Lenguajes de Programación

### C# - Mi Especialidad Backend
```csharp
// Ejemplo de API Controller
[ApiController]
[Route("api/[controller]")]
public class ProductosController : ControllerBase
{
    private readonly IProductoService _service;

    [HttpGet]
    public async Task<IActionResult> GetProductos()
    {
        var productos = await _service.ObtenerTodosAsync();
        return Ok(productos);
    }
}
```

**Experiencia con C#:**
- ✅ Aplicaciones de consola y escritorio
- ✅ Desarrollo web con ASP.NET Core
- ✅ Entity Framework para bases de datos
- ✅ Programación orientada a objetos
- ✅ Patrones de diseño (MVC, Repository)

### PHP - Desarrollo Web Dinámico
```php
// Sistema de autenticación seguro
class AuthController {
    public function login($email, $password) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $this->db->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);

        if ($user = $stmt->fetch()) {
            if (password_verify($password, $user['password'])) {
                $_SESSION['user_id'] = $user['id'];
                return ['success' => true];
            }
        }
        return ['success' => false];
    }
}
```

**Competencias en PHP:**
- ✅ PHP 7.4+ con características modernas
- ✅ Desarrollo de APIs RESTful
- ✅ Integración con bases de datos MySQL
- ✅ Manejo de sesiones y autenticación
- ✅ Arquitectura MVC personalizada

### JavaScript - Interactividad Frontend
```javascript
// Componente reutilizable para formularios
class FormValidator {
    constructor(form) {
        this.form = form;
        this.rules = new Map();
        this.init();
    }

    addRule(field, validator, message) {
        this.rules.set(field, { validator, message });
        return this;
    }

    validate() {
        let isValid = true;
        this.form.querySelectorAll('.error').forEach(el => el.remove());

        this.rules.forEach((rule, field) => {
            const input = this.form.querySelector(`[name="${field}"]`);
            if (!rule.validator(input.value)) {
                this.showError(input, rule.message);
                isValid = false;
            }
        });

        return isValid;
    }
}
```

**Habilidades JavaScript:**
- ✅ ES6+ (Arrow functions, Promises, Async/await)
- ✅ Manipulación del DOM avanzada
- ✅ Event handling y programación asíncrona
- ✅ Consumo de APIs y AJAX
- ✅ Módulos y bundling básico

## 🎨 Frameworks y Librerías

### Spring Boot (Java)
**Desarrollo Backend Empresarial:**
- ✅ Arquitectura de microservicios
- ✅ REST APIs con Spring MVC
- ✅ Integración con bases de datos (JPA/Hibernate)
- ✅ Seguridad con Spring Security
- ✅ Inyección de dependencias

### Vue.js
**Framework Frontend Progresivo:**
- ✅ Componentes reactivos
- ✅ Vue Router para SPA
- ✅ Vuex para gestión de estado
- ✅ Directivas y computed properties
- ✅ Integración con APIs

### React
**Biblioteca UI Moderna:**
- ✅ Componentes funcionales y hooks
- ✅ JSX y virtual DOM
- ✅ Props y state management
- ✅ Lifecycle methods
- ✅ React Router básico

## 🎨 Tecnologías Frontend

### HTML5 & CSS3
```html
<!-- Estructura semántica moderna -->
<article class="project-card" itemscope itemtype="https://schema.org/CreativeWork">
    <header class="project-header">
        <h2 itemprop="name">Título del Proyecto</h2>
        <time itemprop="dateCreated" datetime="2025-01-19">19 Enero, 2025</time>
    </header>

    <section class="project-content">
        <p itemprop="description">Descripción del proyecto...</p>
    </section>
</article>
```

```css
/* CSS Grid y Flexbox avanzado */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.project-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

@media (prefers-reduced-motion: reduce) {
    .project-card {
        transition: none;
    }
}
```

**Dominio Frontend:**
- ✅ HTML5 semántico y accesible
- ✅ CSS3 con Grid, Flexbox y animaciones
- ✅ Responsive design mobile-first
- ✅ CSS custom properties y metodología BEM
- ✅ Optimización de performance

### Bootstrap 5
```html
<!-- Componente personalizado con Bootstrap -->
<div class="card shadow-lg border-0 overflow-hidden">
    <div class="card-header bg-gradient-primary text-white">
        <div class="row align-items-center">
            <div class="col">
                <h5 class="mb-0">Dashboard Analytics</h5>
            </div>
            <div class="col-auto">
                <span class="badge bg-light text-primary">Live</span>
            </div>
        </div>
    </div>
    <div class="card-body p-4">
        <!-- Contenido del card -->
    </div>
</div>
```

## 🗄️ Bases de Datos

### MySQL
```sql
-- Consultas optimizadas y procedimientos almacenados
DELIMITER //
CREATE PROCEDURE ObtenerEstadisticasProducto(
    IN producto_id INT,
    IN fecha_inicio DATE,
    IN fecha_fin DATE
)
BEGIN
    SELECT
        p.nombre,
        COUNT(v.id) as total_ventas,
        SUM(v.cantidad * p.precio) as ingresos_totales,
        AVG(v.cantidad) as promedio_cantidad
    FROM productos p
    LEFT JOIN ventas v ON p.id = v.producto_id
    WHERE p.id = producto_id
        AND v.fecha BETWEEN fecha_inicio AND fecha_fin
    GROUP BY p.id;
END //
DELIMITER ;
```

**Competencias en Bases de Datos:**
- ✅ Diseño de esquemas relacionales
- ✅ Normalización hasta 3NF
- ✅ Consultas complejas con JOINs
- ✅ Índices y optimización de queries
- ✅ Procedimientos almacenados y triggers

## 💻 Sistemas y Servidores

### Linux - Administración de Sistemas
**Competencias en Entornos Linux:**
- ✅ Configuración y administración de servidores
- ✅ Comandos de terminal y scripting Bash
- ✅ Gestión de usuarios y permisos
- ✅ Configuración de servicios (Apache, Nginx, MySQL)
- ✅ Deploy básico de aplicaciones en la nube
- ✅ Manejo de procesos y monitoreo de recursos

**Experiencia Práctica:**
```bash
# Deploy de aplicación web
sudo systemctl start nginx
sudo systemctl enable mysql

# Gestión de permisos
chmod 755 /var/www/html
chown -R www-data:www-data /var/www

# Monitoreo de servicios
sudo systemctl status apache2
tail -f /var/log/nginx/error.log
```

### Configuración de Servidores Web
- ✅ Apache HTTP Server
- ✅ Nginx (proxy reverso y servidor web)
- ✅ Configuración de virtual hosts
- ✅ SSL/TLS y certificados
- ✅ Optimización de performance

## 🛠️ Herramientas de Desarrollo

### Visual Studio & VS Code
- **Configuración personalizada** con extensions esenciales
- **Debugging avanzado** con breakpoints y watch
- **Git integration** para control de versiones
- **IntelliSense** para autocompletado eficiente
- **Snippets personalizados** para mayor productividad

### Control de Versiones
```bash
# Workflow típico de Git que uso
git checkout -b feature/nueva-funcionalidad
git add .
git commit -m "feat: implementar sistema de notificaciones

- Agregar servicio de email
- Crear templates de notificaciones
- Integrar con base de datos de usuarios"

git push origin feature/nueva-funcionalidad
# Crear Pull Request para revisión
```

## 🏗️ Arquitectura y Patrones

### Patrón MVC
```
mi-proyecto/
├── Controllers/         # Lógica de control
│   ├── HomeController.cs
│   └── ApiController.cs
├── Models/             # Modelos de datos
│   ├── Usuario.cs
│   └── Producto.cs
├── Views/              # Interfaces de usuario
│   ├── Home/
│   └── Shared/
└── Services/           # Lógica de negocio
    ├── IUsuarioService.cs
    └── UsuarioService.cs
```

### Principios SOLID
- **Single Responsibility**: Cada clase tiene una responsabilidad específica
- **Open/Closed**: Abierto para extensión, cerrado para modificación
- **Liskov Substitution**: Subtipos deben ser sustituibles por tipos base
- **Interface Segregation**: Interfaces específicas mejor que generales
- **Dependency Inversion**: Depender de abstracciones, no concreciones

## 📊 Metodologías de Trabajo

### Desarrollo Ágil
- ✅ **Scrum básico**: Sprints, dailys, retrospectivas
- ✅ **Kanban**: Gestión visual de tareas
- ✅ **User Stories**: Definición de requerimientos
- ✅ **Testing**: Unit tests y testing manual

## 🎯 Habilidades Blandas (Soft Skills)

### Aptitudes Profesionales
- 💡 **Resolución de Problemas**: Análisis sistemático y soluciones creativas
- 👥 **Trabajo en Equipo**: Colaboración efectiva y comunicación clara
- ⚡ **Responsabilidad**: Compromiso con entregas y calidad del código
- 🚀 **Proactividad**: Iniciativa para aprender y mejorar continuamente
- 🔄 **Adaptabilidad**: Flexibilidad ante nuevas tecnologías y metodologías
- 📚 **Aprendizaje Continuo**: Autodidacta con pasión por nuevas tecnologías

### Clean Code
```csharp
// Código limpio y bien documentado
public class CalculadoraPrecios
{
    private const decimal DESCUENTO_ESTUDIANTE = 0.15m;
    private const decimal IVA = 0.13m;

    /// <summary>
    /// Calcula el precio final incluyendo descuentos e impuestos
    /// </summary>
    /// <param name="precioBase">Precio base del producto</param>
    /// <param name="esEstudiante">Si aplica descuento estudiantil</param>
    /// <returns>Precio final con descuentos e IVA aplicados</returns>
    public decimal CalcularPrecioFinal(decimal precioBase, bool esEstudiante)
    {
        var precioConDescuento = esEstudiante
            ? AplicarDescuento(precioBase, DESCUENTO_ESTUDIANTE)
            : precioBase;

        return AplicarImpuestos(precioConDescuento, IVA);
    }
}
```

## 🎓 Certificaciones Profesionales

> 🔗 **Verificación de Credenciales**: Todos los certificados listados son verificables mediante los enlaces proporcionados al final de esta sección.

### Google IT Support Professional Certificate (2025)
**Certificación profesional compuesta por 6 cursos especializados**

**Áreas de Conocimiento:**
- ✅ **Soporte Técnico**: Troubleshooting, resolución de problemas de hardware y software
- ✅ **Redes**: Configuración y administración de redes, protocolos TCP/IP, DNS, DHCP
- ✅ **Sistemas Operativos**: Windows, Linux, administración de sistemas
- ✅ **Administración de Sistemas**: Gestión de usuarios, permisos, políticas de grupo
- ✅ **Infraestructura TI**: Configuración de servidores, servicios de red
- ✅ **Ciberseguridad**: Protección de sistemas, políticas de seguridad corporativa
- ✅ **Configuración de Equipos**: Instalación y mantenimiento de hardware empresarial

**Certificados Completados:**
1. ✅ Technical Support Fundamentals
2. ✅ Computer Hardware Basics
3. ✅ Operating Systems and You: Becoming a Power User
4. ✅ System Administration and IT Infrastructure Services
5. ✅ IT Security: Defense against the Digital Dark Arts
6. ✅ The Bits and Bytes of Computer Networking

### Cisco Networking Academy (2025)

**Certificaciones en Ciberseguridad e Inteligencia Artificial:**

#### Introduction to Cybersecurity
**Competencias Desarrolladas:**
- ✅ Principios de seguridad digital y análisis de amenazas
- ✅ Identificación y mitigación de ataques modernos
- ✅ Protección de redes y sistemas
- ✅ Implementación de cifrado y políticas de seguridad
- ✅ Fundamentos de defensa en entornos corporativos
- ✅ Prácticas de seguridad y respuesta a incidentes

#### Introduction to Modern AI
**Conocimientos Adquiridos:**
- ✅ Fundamentos de inteligencia artificial
- ✅ Machine Learning y algoritmos de aprendizaje
- ✅ Algoritmos modernos y técnicas de entrenamiento
- ✅ Automatización de procesos con IA
- ✅ Aplicaciones actuales de IA en la industria TI
- ✅ Ética y mejores prácticas en implementación de IA

#### Introduction to IoT
**Internet de las Cosas:**
- ✅ Fundamentos de IoT y dispositivos conectados
- ✅ Arquitectura de redes IoT
- ✅ Seguridad en dispositivos IoT

### Otras Certificaciones Completadas

#### Desarrollo Profesional y Habilidades
- ✅ **Accelerate Your Job Search with AI** - Optimización de búsqueda laboral con IA
- ✅ **Digital Awareness** - Conciencia digital y seguridad online
- ✅ **Descubre Tu Vocación** - Orientación y desarrollo profesional
- ✅ **Using Computer and Mobile Devices** - Uso efectivo de tecnología

#### Idiomas y Programación
- ✅ **EF SET English Certificate** - Certificación de nivel de inglés
- ✅ **Python TOTAL - Programador Avanzado en 16 días** (Udemy) - Programación Python avanzada

---

### 🔐 Verificar Certificados

[![Google IT Support](https://img.shields.io/badge/Coursera-Google_IT_Support-0056D2?style=for-the-badge&logo=coursera&logoColor=white)](https://coursera.org/verify/professional-cert/V9B53STR6554)
[![Accelerate Job Search](https://img.shields.io/badge/Coursera-Job_Search_AI-0056D2?style=for-the-badge&logo=coursera&logoColor=white)](https://coursera.org/verify/4PL1TBZNZGLO)

[![Cisco Badges](https://img.shields.io/badge/Credly-Cisco_Certifications-FF6B00?style=for-the-badge&logo=credly&logoColor=white)](https://www.credly.com/users/kathya-carolina-perez-jimenez)

[![EF SET English](https://img.shields.io/badge/EF_SET-English_Certificate-0080FF?style=for-the-badge)](https://cert.efset.org/kKWaku)

**Certificados pendientes de links de verificación:**
- Computer Hardware Basics
- Operating Systems and You
- System Administration and IT Infrastructure
- IT Security: Defense against the Digital Dark Arts
- The Bits and Bytes of Computer Networking
- Digital Awareness
- Python TOTAL (Udemy)
- Descubre Tu Vocación
- Using Computer and Mobile Devices

---

📌 **Nota**: Todos los certificados están verificables en las plataformas correspondientes (Coursera, Cisco NetAcad, Udemy).

## 🚀 Próximos Pasos en mi Desarrollo

### Tecnologías en Aprendizaje
- [ ] **React.js**: Framework frontend moderno
- [ ] **Vue.js**: Framework progresivo para interfaces
- [ ] **Spring Boot**: Framework Java para backend
- [ ] **Docker**: Containerización de aplicaciones
- [ ] **Azure/AWS**: Cloud computing y DevOps

### Certificaciones en Progreso
- [ ] **Cisco CCNA**: Networking fundamentals
- [ ] **CompTIA A+**: Hardware y software fundamentals
- [ ] **Microsoft Azure Fundamentals**
- [ ] **Oracle Database SQL Certified**

## 💡 Mi Filosofía de Desarrollo

> "El código es poesía que las máquinas pueden ejecutar y los humanos pueden entender"

### Principios que Sigo:
1. **Código Legible**: Priorizar claridad sobre cleverness
2. **Testing First**: Escribir tests para garantizar calidad
3. **Refactoring Continuo**: Mejorar constantemente el código
4. **Documentación**: Código autodocumentado con comentarios necesarios
5. **Performance Conscious**: Optimizar cuando sea necesario

---

*Mi stack técnico está en constante evolución. Cada proyecto es una oportunidad para aprender nuevas tecnologías y mejorar las existentes. ¿Tienes algún proyecto interesante? ¡Hablemos!*