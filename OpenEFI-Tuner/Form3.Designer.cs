namespace OpenEFI_Tuner
{
    partial class Form3
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form3));
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.button9 = new System.Windows.Forms.Button();
            this.button8 = new System.Windows.Forms.Button();
            this.button7 = new System.Windows.Forms.Button();
            this.button6 = new System.Windows.Forms.Button();
            this.sevenSegmentArray1 = new DmitryBrant.CustomControls.SevenSegmentArray();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.sevenSegmentArray4 = new DmitryBrant.CustomControls.SevenSegmentArray();
            this.button4 = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.button10 = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(351, 12);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(143, 49);
            this.button1.TabIndex = 2;
            this.button1.Text = "Habilitar/Desabilitar";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(352, 85);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(109, 32);
            this.button2.TabIndex = 3;
            this.button2.Text = "+ 0.05 mS";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(15, 90);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(105, 27);
            this.button3.TabIndex = 4;
            this.button3.Text = "- 0.05 mS";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.button9);
            this.groupBox1.Controls.Add(this.button8);
            this.groupBox1.Controls.Add(this.button7);
            this.groupBox1.Controls.Add(this.button6);
            this.groupBox1.Controls.Add(this.sevenSegmentArray1);
            this.groupBox1.Controls.Add(this.button3);
            this.groupBox1.Controls.Add(this.button2);
            this.groupBox1.Location = new System.Drawing.Point(19, 81);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(475, 135);
            this.groupBox1.TabIndex = 5;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Inyeccion (mS)";
            // 
            // button9
            // 
            this.button9.Location = new System.Drawing.Point(15, 19);
            this.button9.Name = "button9";
            this.button9.Size = new System.Drawing.Size(105, 33);
            this.button9.TabIndex = 7;
            this.button9.Text = "- 10 mS";
            this.button9.UseVisualStyleBackColor = true;
            this.button9.Click += new System.EventHandler(this.button9_Click);
            // 
            // button8
            // 
            this.button8.Location = new System.Drawing.Point(15, 58);
            this.button8.Name = "button8";
            this.button8.Size = new System.Drawing.Size(105, 26);
            this.button8.TabIndex = 7;
            this.button8.Text = "- 1 mS";
            this.button8.UseVisualStyleBackColor = true;
            this.button8.Click += new System.EventHandler(this.button8_Click);
            // 
            // button7
            // 
            this.button7.Location = new System.Drawing.Point(352, 17);
            this.button7.Name = "button7";
            this.button7.Size = new System.Drawing.Size(112, 30);
            this.button7.TabIndex = 7;
            this.button7.Text = "+ 10 mS";
            this.button7.UseVisualStyleBackColor = true;
            this.button7.Click += new System.EventHandler(this.button7_Click);
            // 
            // button6
            // 
            this.button6.Location = new System.Drawing.Point(352, 53);
            this.button6.Name = "button6";
            this.button6.Size = new System.Drawing.Size(112, 26);
            this.button6.TabIndex = 6;
            this.button6.Text = "+ 1 mS";
            this.button6.UseVisualStyleBackColor = true;
            this.button6.Click += new System.EventHandler(this.button6_Click);
            // 
            // sevenSegmentArray1
            // 
            this.sevenSegmentArray1.ArrayCount = 4;
            this.sevenSegmentArray1.AutoSize = true;
            this.sevenSegmentArray1.ColorBackground = System.Drawing.Color.Gainsboro;
            this.sevenSegmentArray1.ColorDark = System.Drawing.Color.Silver;
            this.sevenSegmentArray1.ColorLight = System.Drawing.Color.Red;
            this.sevenSegmentArray1.DecimalShow = true;
            this.sevenSegmentArray1.ElementPadding = new System.Windows.Forms.Padding(4);
            this.sevenSegmentArray1.ElementWidth = 10;
            this.sevenSegmentArray1.ItalicFactor = 0F;
            this.sevenSegmentArray1.Location = new System.Drawing.Point(136, 29);
            this.sevenSegmentArray1.Name = "sevenSegmentArray1";
            this.sevenSegmentArray1.Size = new System.Drawing.Size(210, 74);
            this.sevenSegmentArray1.TabIndex = 5;
            this.sevenSegmentArray1.TabStop = false;
            this.sevenSegmentArray1.Value = null;
            this.sevenSegmentArray1.Load += new System.EventHandler(this.sevenSegmentArray1_Load);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.sevenSegmentArray4);
            this.groupBox2.Controls.Add(this.button4);
            this.groupBox2.Controls.Add(this.button5);
            this.groupBox2.Location = new System.Drawing.Point(19, 237);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(475, 149);
            this.groupBox2.TabIndex = 6;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Encendido (°)";
            // 
            // sevenSegmentArray4
            // 
            this.sevenSegmentArray4.ArrayCount = 4;
            this.sevenSegmentArray4.AutoSize = true;
            this.sevenSegmentArray4.ColorBackground = System.Drawing.Color.Gainsboro;
            this.sevenSegmentArray4.ColorDark = System.Drawing.Color.Silver;
            this.sevenSegmentArray4.ColorLight = System.Drawing.Color.Red;
            this.sevenSegmentArray4.DecimalShow = true;
            this.sevenSegmentArray4.ElementPadding = new System.Windows.Forms.Padding(4);
            this.sevenSegmentArray4.ElementWidth = 10;
            this.sevenSegmentArray4.ItalicFactor = 0F;
            this.sevenSegmentArray4.Location = new System.Drawing.Point(136, 44);
            this.sevenSegmentArray4.Name = "sevenSegmentArray4";
            this.sevenSegmentArray4.Size = new System.Drawing.Size(210, 78);
            this.sevenSegmentArray4.TabIndex = 5;
            this.sevenSegmentArray4.TabStop = false;
            this.sevenSegmentArray4.Value = null;
            this.sevenSegmentArray4.Load += new System.EventHandler(this.sevenSegmentArray4_Load);
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(15, 63);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(105, 53);
            this.button4.TabIndex = 4;
            this.button4.Text = "Bajar";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(347, 63);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(117, 53);
            this.button5.TabIndex = 3;
            this.button5.Text = "Subir";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // button10
            // 
            this.button10.Location = new System.Drawing.Point(19, 11);
            this.button10.Name = "button10";
            this.button10.Size = new System.Drawing.Size(137, 50);
            this.button10.TabIndex = 7;
            this.button10.Text = "Apagar / Encender Motor";
            this.button10.UseVisualStyleBackColor = true;
            this.button10.Click += new System.EventHandler(this.button10_Click);
            // 
            // Form3
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(551, 437);
            this.Controls.Add(this.button10);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.button1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form3";
            this.Text = "OpenEFI-Tuner || Fixed Mode";
            this.Load += new System.EventHandler(this.Form3_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.Button button5;
        private DmitryBrant.CustomControls.SevenSegmentArray sevenSegmentArray1;
        private DmitryBrant.CustomControls.SevenSegmentArray sevenSegmentArray4;
        private System.Windows.Forms.Button button8;
        private System.Windows.Forms.Button button7;
        private System.Windows.Forms.Button button6;
        private System.Windows.Forms.Button button9;
        private System.Windows.Forms.Button button10;
    }
}