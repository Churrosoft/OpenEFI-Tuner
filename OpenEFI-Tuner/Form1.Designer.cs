namespace OpenEFI_Tuner
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.listBox1 = new System.Windows.Forms.ListBox();
            this.button2 = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.aquaGauge2 = new AquaControls.AquaGauge();
            this.aquaGauge1 = new AquaControls.AquaGauge();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.sevenSegmentArray1 = new DmitryBrant.CustomControls.SevenSegmentArray();
            this.panel1 = new System.Windows.Forms.Panel();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.sevenSegmentArray2 = new DmitryBrant.CustomControls.SevenSegmentArray();
            this.sevenSegmentArray3 = new DmitryBrant.CustomControls.SevenSegmentArray();
            this.groupBox5 = new System.Windows.Forms.GroupBox();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.panel1.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.groupBox4.SuspendLayout();
            this.groupBox5.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.listBox1);
            this.groupBox1.Controls.Add(this.button2);
            this.groupBox1.Controls.Add(this.button1);
            this.groupBox1.Location = new System.Drawing.Point(574, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(366, 67);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Conexion a sistema";
            // 
            // listBox1
            // 
            this.listBox1.FormattingEnabled = true;
            this.listBox1.Location = new System.Drawing.Point(114, 18);
            this.listBox1.Name = "listBox1";
            this.listBox1.Size = new System.Drawing.Size(126, 43);
            this.listBox1.TabIndex = 3;
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(21, 25);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 2;
            this.button2.Text = "escanear";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(246, 19);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(114, 34);
            this.button1.TabIndex = 0;
            this.button1.Text = "conectar";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // textBox1
            // 
            this.textBox1.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.textBox1.ForeColor = System.Drawing.Color.Lime;
            this.textBox1.Location = new System.Drawing.Point(12, 462);
            this.textBox1.Multiline = true;
            this.textBox1.Name = "textBox1";
            this.textBox1.ReadOnly = true;
            this.textBox1.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.textBox1.Size = new System.Drawing.Size(928, 125);
            this.textBox1.TabIndex = 1;
            this.textBox1.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // aquaGauge2
            // 
            this.aquaGauge2.BackColor = System.Drawing.Color.Transparent;
            this.aquaGauge2.DialColor = System.Drawing.Color.Lavender;
            this.aquaGauge2.DialText = null;
            this.aquaGauge2.Glossiness = 11.36364F;
            this.aquaGauge2.Location = new System.Drawing.Point(322, 221);
            this.aquaGauge2.MaxValue = 0F;
            this.aquaGauge2.MinValue = 0F;
            this.aquaGauge2.Name = "aquaGauge2";
            this.aquaGauge2.RecommendedValue = 0F;
            this.aquaGauge2.Size = new System.Drawing.Size(235, 235);
            this.aquaGauge2.TabIndex = 3;
            this.aquaGauge2.ThresholdPercent = 0F;
            this.aquaGauge2.Value = 0F;
            // 
            // aquaGauge1
            // 
            this.aquaGauge1.BackColor = System.Drawing.Color.Transparent;
            this.aquaGauge1.DialColor = System.Drawing.Color.Lavender;
            this.aquaGauge1.DialText = null;
            this.aquaGauge1.Glossiness = 11.36364F;
            this.aquaGauge1.Location = new System.Drawing.Point(563, 85);
            this.aquaGauge1.MaxValue = 0F;
            this.aquaGauge1.MinValue = 0F;
            this.aquaGauge1.Name = "aquaGauge1";
            this.aquaGauge1.RecommendedValue = 0F;
            this.aquaGauge1.Size = new System.Drawing.Size(377, 377);
            this.aquaGauge1.TabIndex = 2;
            this.aquaGauge1.ThresholdPercent = 0F;
            this.aquaGauge1.Value = 0F;
            this.aquaGauge1.Load += new System.EventHandler(this.aquaGauge1_Load_1);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.groupBox4);
            this.groupBox2.Controls.Add(this.groupBox3);
            this.groupBox2.Location = new System.Drawing.Point(13, 11);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(164, 177);
            this.groupBox2.TabIndex = 6;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Datos INY/ENC";
            this.groupBox2.Enter += new System.EventHandler(this.groupBox2_Enter);
            // 
            // sevenSegmentArray1
            // 
            this.sevenSegmentArray1.ArrayCount = 4;
            this.sevenSegmentArray1.ColorBackground = System.Drawing.Color.Gainsboro;
            this.sevenSegmentArray1.ColorDark = System.Drawing.Color.DarkGray;
            this.sevenSegmentArray1.ColorLight = System.Drawing.Color.SeaGreen;
            this.sevenSegmentArray1.DecimalShow = true;
            this.sevenSegmentArray1.ElementPadding = new System.Windows.Forms.Padding(4);
            this.sevenSegmentArray1.ElementWidth = 10;
            this.sevenSegmentArray1.ItalicFactor = 0F;
            this.sevenSegmentArray1.Location = new System.Drawing.Point(6, 19);
            this.sevenSegmentArray1.Name = "sevenSegmentArray1";
            this.sevenSegmentArray1.Size = new System.Drawing.Size(117, 38);
            this.sevenSegmentArray1.TabIndex = 5;
            this.sevenSegmentArray1.TabStop = false;
            this.sevenSegmentArray1.Value = null;
            this.sevenSegmentArray1.Load += new System.EventHandler(this.sevenSegmentArray1_Load);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.groupBox2);
            this.panel1.Location = new System.Drawing.Point(12, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(187, 203);
            this.panel1.TabIndex = 6;
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.sevenSegmentArray1);
            this.groupBox3.Location = new System.Drawing.Point(20, 25);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(130, 64);
            this.groupBox3.TabIndex = 7;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "tiempo inyeccion(MS)";
            // 
            // groupBox4
            // 
            this.groupBox4.Controls.Add(this.sevenSegmentArray2);
            this.groupBox4.Location = new System.Drawing.Point(20, 95);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(130, 64);
            this.groupBox4.TabIndex = 8;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "avance";
            // 
            // sevenSegmentArray2
            // 
            this.sevenSegmentArray2.ArrayCount = 4;
            this.sevenSegmentArray2.ColorBackground = System.Drawing.Color.Gainsboro;
            this.sevenSegmentArray2.ColorDark = System.Drawing.Color.DarkGray;
            this.sevenSegmentArray2.ColorLight = System.Drawing.Color.Chartreuse;
            this.sevenSegmentArray2.DecimalShow = true;
            this.sevenSegmentArray2.ElementPadding = new System.Windows.Forms.Padding(4);
            this.sevenSegmentArray2.ElementWidth = 10;
            this.sevenSegmentArray2.ItalicFactor = 0F;
            this.sevenSegmentArray2.Location = new System.Drawing.Point(6, 19);
            this.sevenSegmentArray2.Name = "sevenSegmentArray2";
            this.sevenSegmentArray2.Size = new System.Drawing.Size(117, 38);
            this.sevenSegmentArray2.TabIndex = 5;
            this.sevenSegmentArray2.TabStop = false;
            this.sevenSegmentArray2.Value = null;
            // 
            // sevenSegmentArray3
            // 
            this.sevenSegmentArray3.ArrayCount = 4;
            this.sevenSegmentArray3.ColorBackground = System.Drawing.Color.Gainsboro;
            this.sevenSegmentArray3.ColorDark = System.Drawing.Color.DarkGray;
            this.sevenSegmentArray3.ColorLight = System.Drawing.Color.Red;
            this.sevenSegmentArray3.DecimalShow = true;
            this.sevenSegmentArray3.ElementPadding = new System.Windows.Forms.Padding(4);
            this.sevenSegmentArray3.ElementWidth = 10;
            this.sevenSegmentArray3.ItalicFactor = 0F;
            this.sevenSegmentArray3.Location = new System.Drawing.Point(6, 19);
            this.sevenSegmentArray3.Name = "sevenSegmentArray3";
            this.sevenSegmentArray3.Size = new System.Drawing.Size(136, 54);
            this.sevenSegmentArray3.TabIndex = 7;
            this.sevenSegmentArray3.TabStop = false;
            this.sevenSegmentArray3.Value = null;
            // 
            // groupBox5
            // 
            this.groupBox5.Controls.Add(this.sevenSegmentArray3);
            this.groupBox5.Location = new System.Drawing.Point(205, 12);
            this.groupBox5.Name = "groupBox5";
            this.groupBox5.Size = new System.Drawing.Size(152, 82);
            this.groupBox5.TabIndex = 8;
            this.groupBox5.TabStop = false;
            this.groupBox5.Text = "Bateria (V)";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(952, 599);
            this.Controls.Add(this.groupBox5);
            this.Controls.Add(this.aquaGauge2);
            this.Controls.Add(this.aquaGauge1);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.panel1);
            this.Name = "Form1";
            this.Text = "Open EFI || Tuner v1.5.3";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox2.ResumeLayout(false);
            this.panel1.ResumeLayout(false);
            this.groupBox3.ResumeLayout(false);
            this.groupBox4.ResumeLayout(false);
            this.groupBox5.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.ListBox listBox1;
        private AquaControls.AquaGauge aquaGauge1;
        private AquaControls.AquaGauge aquaGauge2;
        private System.Windows.Forms.GroupBox groupBox2;
        private DmitryBrant.CustomControls.SevenSegmentArray sevenSegmentArray1;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.GroupBox groupBox4;
        private DmitryBrant.CustomControls.SevenSegmentArray sevenSegmentArray2;
        private System.Windows.Forms.GroupBox groupBox3;
        private DmitryBrant.CustomControls.SevenSegmentArray sevenSegmentArray3;
        private System.Windows.Forms.GroupBox groupBox5;
    }
}

