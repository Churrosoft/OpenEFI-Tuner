using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;
delegate void SetTextCallback(string dato);

namespace OpenEFI_Tuner
{

    public partial class Form1 : Form
    {

        public bool conectado = false;
        public event FormClosingEventHandler FormClosing;
        SerialPort ArduinoPort = new SerialPort(); //DECLARAMOS instancia de serial port para luego empezar comunicacion

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {

            string[] ports = SerialPort.GetPortNames();
            foreach (string port in ports)
            {
                listBox1.Items.Add(port);
            }
        }

        public void button1_Click(object sender, EventArgs e)
        {
            Conectar();
        }
        public void Conectar()
        {
            try
            {
                ArduinoPort.PortName = (string)listBox1.SelectedItem; //el puerto lo sacamos del listbox1 
                ArduinoPort.BaudRate = 9600; //la veloidad siempre queda fija
                ArduinoPort.DataReceived += new SerialDataReceivedEventHandler(SerialPort_DataReceived);
            }
            catch { MessageBox.Show("Ya hay una conexion abierta"); }
            try
            {
                ArduinoPort.Open(); //intentamos conectarnos al arduino
                MessageBox.Show("Se puedo conectar :D");
                conectado = true;
            }
            catch
            {
                MessageBox.Show("Te mandaste una cagada boludo 7-7");
            }


        }
        private void aquaGauge1_Load(object sender, EventArgs e)
        {

        }

        private void aquaGauge1_Load_1(object sender, EventArgs e)
        {
            aquaGauge1.MaxValue = 8000;
            aquaGauge1.MinValue = 0;
            aquaGauge1.DialText = "RPM";

            aquaGauge2.MaxValue = 120;
            aquaGauge2.MinValue = -10;
            aquaGauge2.Value = 50.5F;
            aquaGauge2.DialText = "Temp °C";
            aquaGauge3.MaxValue = 100;
            aquaGauge3.MinValue = 0;
            aquaGauge3.DialText = "Carga";
        }

        public void SerialPort_DataReceived(object sender, SerialDataReceivedEventArgs e)
        {

            // Leemos el dato recibido del puerto serie
            string inData = ArduinoPort.ReadLine().ToString();
            actualizar(inData.ToString());
        }

        public void actualizar(string dato)
        {
            if (this.textBox1.InvokeRequired)
            {
                SetTextCallback d = new SetTextCallback(actualizar);
                this.Invoke(d, new object[] { dato });
            }
            else
            {

                //comenzamos a clasificar los datos de entrada y modificar :P
                string result;
                int dato2;
                if (dato.StartsWith("RPM"))
                {
                    result = dato.Remove(0, 4);
                    dato2 = Convert.ToInt32(result);
                    this.aquaGauge1.Value = dato2;
                }
                if (dato.StartsWith("00V"))
                {
                    result = dato.Remove(0, 4);
                    this.sevenSegmentArray3.Value = result;
                }
                if (dato.StartsWith("TEMP"))
                {
                    result = dato.Remove(0, 4);
                    dato2 = Convert.ToInt32(result);
                    this.aquaGauge2.Value = dato2;
                }
                if (dato.StartsWith("LOAD"))
                {
                    result = dato.Remove(0, 4);
                    dato2 = Convert.ToInt32(result);
                    this.aquaGauge3.Value = dato2;
                }
                if (dato.StartsWith("INY"))
                {
                    result = dato.Remove(0, 4);
                    this.sevenSegmentArray1.Value = result;

                }
                if (dato.StartsWith("AVC"))
                {
                    result = dato.Remove(0, 4);
                    this.sevenSegmentArray2.Value = result;

                }
                if (dato.StartsWith("DBG"))
                {
                    this.textBox1.AppendText(dato + Environment.NewLine);
                }
            }
        }

        private void sevenSegmentArray1_Load(object sender, EventArgs e)
        {
            sevenSegmentArray4.Value = "125.7";
        }

        private void groupBox2_Enter(object sender, EventArgs e)
        {

        }

        private void Desconectar_Click(object sender, EventArgs e)
        {

        }

        private void toolStripComboBox1_Click(object sender, EventArgs e)
        {
        }

        private void toolStripSplitButton1_ButtonClick(object sender, EventArgs e)
        {

        }

        private void desconectarToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void desconectarToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            try
            {
                ArduinoPort.Close();
                MessageBox.Show("se cerro correctamente la conexion");
            }
            catch
            {
                MessageBox.Show("No se puede cerrar la conexion");
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {

        }

        private void modoFijoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form3 frm = new Form3();
            frm.Show();
        }

        protected override void OnClosing(CancelEventArgs e)
        {
            const string message = "Esta seguro que quiere salir?";
            const string caption = "OpenEFI || Tuner v1.3.5";
            var result = MessageBox.Show(message, caption, MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            {
                if (result == DialogResult.Yes)
                {
                    base.OnClosing(e);
                }
                if (result == DialogResult.No)
                {
                    e.Cancel = true;
                }
            }

        }
        public void enviarSerie(string txt, bool op){
            if (op) { ArduinoPort.WriteLine(txt); } else { ArduinoPort.Write(txt); }
        }
    }

}