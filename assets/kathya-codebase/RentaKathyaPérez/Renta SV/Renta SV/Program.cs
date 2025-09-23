using System;

class Program
{
    static void Main()
    {
        bool continuar = true;

        while (continuar)
        {
            Console.WriteLine("\n¡Hola! Soy tu asistente de nómina. Te ayudaré a calcular tu salario retenido, la renta a pagar y el pago por horas extras.\n");

            // Ingresar salario
            Console.Write("Por favor, ingresa tu salario bruto: ");
            double salarioBruto = Convert.ToDouble(Console.ReadLine());

            // Calcular ISSS
            double descuentoISSS;
            if (salarioBruto >= 1000)
            {
                descuentoISSS = 30.00; // ISSS fijo para salarios de $1000 o más
            }
            else
            {
                descuentoISSS = salarioBruto * 0.03; // 3% para salarios menores a $1000
            }

            double salarioDespuesISSS = salarioBruto - descuentoISSS;

            // Restar AFP (7.25%) -> ERROR AQUÍ (antes se hacía sobre salario después de ISSS)
            double descuentoAFP = salarioBruto * 0.0725;  // CORRECCIÓN: Se calcula sobre el bruto
            double salarioNeto = salarioDespuesISSS - descuentoAFP;

            // Determinar el salario por hora
            double salarioHora = salarioBruto / 30 / 8; // Suponiendo 30 días y 8 horas por día

            // Pedir al usuario las horas extras diurnas y nocturnas
            Console.Write("\nIngresa la cantidad de horas extras diurnas trabajadas: ");
            int horasExtrasDiurnas = Convert.ToInt32(Console.ReadLine());

            Console.Write("Ingresa la cantidad de horas extras nocturnas trabajadas: ");
            int horasExtrasNocturnas = Convert.ToInt32(Console.ReadLine());

            // Calcular pago por horas extras
            double pagoHorasExtrasDiurnas = horasExtrasDiurnas * (salarioHora * 2); // 100% adicional
            double pagoHorasExtrasNocturnas = horasExtrasNocturnas * (salarioHora * 2.25); // 100% + 25% adicional

            // Determinar el tramo y calcular la retención de renta
            double renta = 0;
            string tramo = "";

            Console.WriteLine("\nVoy a calcular en qué tramo te encuentras...\n");

            if (salarioNeto <= 472.00)
            {
                tramo = "Tramo 1 (No aplica renta)";
                Console.WriteLine("Estás en el Tramo 1, lo que significa que no se te descontará renta.");
            }
            else if (salarioNeto <= 895.24)
            {
                tramo = "Tramo 2";
                renta = (salarioNeto - 472.00) * 0.10 + 17.67;
                Console.WriteLine("Estás en el Tramo 2. Se aplicará una tasa del 10% sobre el excedente de $472.00 más una cuota fija de $17.67.");
            }
            else if (salarioNeto <= 2038.10)
            {
                tramo = "Tramo 3";
                renta = (salarioNeto - 895.24) * 0.20 + 60.00;
                Console.WriteLine("Estás en el Tramo 3. Se aplicará una tasa del 20% sobre el excedente de $895.24 más una cuota fija de $60.00.");
            }
            else
            {
                tramo = "Tramo 4";
                renta = (salarioNeto - 2038.10) * 0.30 + 288.57;
                Console.WriteLine("Estás en el Tramo 4. Se aplicará una tasa del 30% sobre el excedente de $2038.10 más una cuota fija de $288.57.");
            }

            // Salario final después de la renta y sumando horas extras
            double salarioFinal = salarioNeto - renta + pagoHorasExtrasDiurnas + pagoHorasExtrasNocturnas;

            // Preguntar si quiere la boleta de pago
            Console.Write("\n¿Quieres ver tu boleta de pago? (Sí/No): ");
            string respuesta = Console.ReadLine().Trim().ToLower();

            if (respuesta == "sí" || respuesta == "si")
            {
                // Imprimir boleta de pago
                Console.WriteLine("Evación de impuestos unicaes");
                Console.WriteLine("\n----------------------");
                Console.WriteLine("      BOLETA DE PAGO     ");
                Console.WriteLine("----------------------");
                Console.WriteLine($"Salario bruto:      ${salarioBruto:F2}");
                Console.WriteLine($"Descuento ISSS:     -${descuentoISSS:F2}");
                Console.WriteLine($"Descuento AFP:      -${descuentoAFP:F2}");
                Console.WriteLine($"Salario retenido:   ${salarioNeto:F2}");
                Console.WriteLine($"Tramo:              {tramo}");
                Console.WriteLine($"Renta aplicada:     -${renta:F2}");
                Console.WriteLine($"Pago horas extras diurnas ({horasExtrasDiurnas}h): +${pagoHorasExtrasDiurnas:F2}");
                Console.WriteLine($"Pago horas extras nocturnas ({horasExtrasNocturnas}h): +${pagoHorasExtrasNocturnas:F2}");
                Console.WriteLine($"Salario final:      ${salarioFinal:F2}");
                Console.WriteLine("----------------------");
                Console.WriteLine("Gracias por usar el sistema.");
            }
            else
            {
                Console.WriteLine("Entendido. Si necesitas tu boleta de pago más tarde, vuelve cuando quieras. ¡Que tengas un buen día!");
            }

            // Preguntar si desea calcular otro salario
            Console.Write("\n¿Deseas calcular otro salario? (Sí/No): ");
            string continuarRespuesta = Console.ReadLine().Trim().ToLower();
            if (continuarRespuesta != "sí" && continuarRespuesta != "si")
            {
                continuar = false;
                Console.WriteLine("\nGracias por usar el sistema. ¡Hasta pronto!");
            }
        }
    }
}
