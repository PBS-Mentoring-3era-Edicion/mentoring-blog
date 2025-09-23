using System;
using System.Collections.Generic;

class Restaurante
{
    static void Main()
    {
        // Menú del restaurante con precios
        Dictionary<string, double> menu = new Dictionary<string, double>()
        {
            {"1. Pancakes", 5.00}, {"2. Omelette", 6.00}, {"3. Tostadas Francesas", 5.70},
            {"4. Hamburguesa", 8.99}, {"5. Ensalada César", 7.49}, {"6. Pasta Alfredo", 9.99},
            {"7. Sopa de Mariscos", 10.00}, {"8. Filete de Res", 12.00}, {"9. Pollo a la Parrilla", 12.50},
            {"10. Pupusa Revueltas", 0.50}, {"11. Pupusa Frijol con Queso", 0.50}, {"12. Pupusa Queso", 0.50},
            {"13. Pupusa Chicharrón", 0.50}, {"14. Pupusa Loroco", 0.50},
            {"15. Café", 1.50}, {"16. Jugo de Naranja", 2.50}, {"17. Agua", 1.00}
        };

        Console.WriteLine("Bienvenido al Restaurante");
        Console.WriteLine("Menú disponible:");
        foreach (var item in menu) { Console.WriteLine($"{item.Key} - ${item.Value} c/u"); }

        // Lista para la orden
        List<string> orden = new List<string>();
        double total = 0;

        // Selección del pedido
        Console.WriteLine("\nIngrese los números de los platillos que desea (separados por comas):");
        string input = Console.ReadLine();
        string[] opciones = input.Split(',');

        // Procesar la orden
        foreach (string opcion in opciones)
        {
            string clave = opcion.Trim() + ".";
            foreach (var item in menu)
            {
                if (item.Key.StartsWith(clave))
                {
                    if (item.Key.Contains("Pupusa")) // Si es una pupusa, preguntar cuántas quiere
                    {
                        Console.Write($"¿Cuántas {item.Key.Substring(3)} desea?: ");
                        int cantidad = Convert.ToInt32(Console.ReadLine());
                        if (cantidad > 0)
                        {
                            orden.Add($"{cantidad}x {item.Key.Substring(3)}");
                            total += cantidad * item.Value;
                        }
                    }
                    else // Para otros platillos, solo agregar al pedido
                    {
                        orden.Add(item.Key);
                        total += item.Value;
                    }
                }
            }
        }

        // Calcular tiempo de espera base
        int tiempoPreparacion = orden.Count * 5;

        // ¿Para llevar?
        Console.Write("\n¿Desea su pedido para llevar? (si/no): ");
        bool paraLlevar = Console.ReadLine().ToLower() == "si";
        if (paraLlevar) { tiempoPreparacion += 5; }

        // ¿Delivery?
        bool delivery = false;
        if (paraLlevar)
        {
            Console.Write("¿Quiere servicio de delivery? (costo adicional $3.00) (si/no): ");
            delivery = Console.ReadLine().ToLower() == "si";
            if (delivery)
            {
                total += 3.00;
                tiempoPreparacion += 10;
            }
        }

        // ¿Acelerar la orden?
        Console.Write("¿Quiere acelerar su pedido por $5? (Reduce el tiempo un 50%) (si/no): ");
        bool acelerar = Console.ReadLine().ToLower() == "si";
        if (acelerar)
        {
            total += 5.00;
            tiempoPreparacion /= 2; // Reducir el tiempo a la mitad
        }

        // Mostrar la orden y total a pagar
        Console.WriteLine("\nSu orden:");
        foreach (var item in orden) { Console.WriteLine($"- {item}"); }
        Console.WriteLine($"Total a pagar: ${total:F2}");
        Console.WriteLine($"Tiempo estimado de preparación: {tiempoPreparacion} minutos.");

        // Pago
        double pago = 0;
        while (pago < total)
        {
            Console.Write("\nIngrese el monto de pago: ");
            pago = Convert.ToDouble(Console.ReadLine());
            if (pago < total) { Console.WriteLine("Monto insuficiente. Intente de nuevo."); }
        }

        // Cambio y despedida
        double cambio = pago - total;
        Console.WriteLine($"Pago recibido. Su cambio: ${cambio:F2}");

        // Confirmación del pedido
        if (paraLlevar)
        {
            Console.WriteLine(delivery ? "Su pedido será entregado a domicilio." : "Su pedido estará listo para recoger.");
        }
        else
        {
            Console.WriteLine("Puede disfrutar su comida en el restaurante.");
        }

        // Regalar cupón si el total supera $20
        if (total > 20)
        {
            Console.WriteLine("Gracias por su compra. Ha recibido un cupón de 10% de descuento para su próxima visita.");
        }

        // Encuesta de satisfacción
        Console.Write("\n¿Cómo calificaría nuestro servicio? (1-5 estrellas): ");
        int estrellas = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine(estrellas >= 4 ? "Gracias por su excelente calificación." : "Lamentamos no haber cumplido sus expectativas.");

        Console.WriteLine("Gracias por su visita.");
    }
}


