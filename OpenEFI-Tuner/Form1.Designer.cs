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
            this.aquaGauge1 = new AquaControls.AquaGauge();
            this.aquaGauge2 = new AquaControls.AquaGauge();
            this.aquaGauge3 = new AquaControls.AquaGauge();
            this.trackBar1 = new System.Windows.Forms.TrackBar();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.trackBar1)).BeginInit();
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
            this.textBox1.Size = new System.Drawing.Size(928, 125);
            this.textBox1.TabIndex = 1;
            this.textBox1.Text = "oijp";
            this.textBox1.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // aquaGauge1
            // 
            this.aquaGauge1.BackColor = System.Drawing.Color.Transparent;
            this.aquaGauge1.DialColor = System.Drawing.Color.Lavender;
            this.aquaGauge1.DialText = null;
            this.aquaGauge1.Glossiness = 11.36364F;
            this.aquaGauge1.Location = new System.Drawing.Point(543, 79);
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
            // aquaGauge2
            // 
            this.aquaGauge2.BackColor = System.Drawing.Color.Transparent;
            this.aquaGauge2.DialColor = System.Drawing.Color.Lavender;
            this.aquaGauge2.DialText = null;
            this.aquaGauge2.Glossiness = 11.36364F;
            this.aquaGauge2.Location = new System.Drawing.Point(12, 221);
            this.aquaGauge2.MaxValue = 0F;
            this.aquaGauge2.MinValue = 0F;
            this.aquaGauge2.Name = "aquaGauge2";
            this.aquaGauge2.RecommendedValue = 0F;
            this.aquaGauge2.Size = new System.Drawing.Size(235, 235);
            this.aquaGauge2.TabIndex = 3;
            this.aquaGauge2.ThresholdPercent = 0F;
            this.aquaGauge2.Value = 0F;
            // 
            // aquaGauge3
            // 
            this.aquaGauge3.BackColor = System.Drawing.Color.Transparent;
            this.aquaGauge3.DialColor = System.Drawing.Color.Lavender;
            this.aquaGauge3.DialText = null;
            this.aquaGauge3.Glossiness = 11.36364F;
            this.aquaGauge3.Location = new System.Drawing.Point(253, 232);
            this.aquaGauge3.MaxValue = 0F;
            this.aquaGauge3.MinValue = 0F;
            this.aquaGauge3.Name = "aquaGauge3";
            this.aquaGauge3.RecommendedValue = 0F;
            this.aquaGauge3.Size = new System.Drawing.Size(224, 224);
            this.aquaGauge3.TabIndex = 4;
            this.aquaGauge3.ThresholdPercent = 0F;
            this.aquaGauge3.Value = 0F;
            // 
            // trackBar1
            // 
            this.trackBar1.Location = new System.Drawing.Point(120, 114);
            this.trackBar1.Name = "trackBar1";
            this.trackBar1.Size = new System.Drawing.Size(300, 45);
            this.trackBar1.TabIndex = 5;
            this.trackBar1.Scroll += new System.EventHandler(this.trackBar1_Scroll);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(952, 599);
            this.Controls.Add(this.trackBar1);
            this.Controls.Add(this.aquaGauge3);
            this.Controls.Add(this.aquaGauge2);
            this.Controls.Add(this.aquaGauge1);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.Text = "Open EFI || Tuner v0.0.1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.trackBar1)).EndInit();
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
        private AquaControls.AquaGauge aquaGauge3;
        private System.Windows.Forms.TrackBar trackBar1;
    }
}

