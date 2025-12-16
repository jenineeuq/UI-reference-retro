"use client";

import { useState } from "react";
import {
  Eye, EyeOff, ChevronDown, X, Calendar, Upload, Bold, Italic,
  Underline, List, Plus, Trash2, Check
} from "lucide-react";

// Retro style classes using theme variables
const retroInput = "w-full px-4 py-2.5 border-4 theme-border theme-bg theme-text font-mono uppercase tracking-wide focus:outline-none focus:theme-shadow transition-all placeholder:theme-text-subtle";
const retroButton = "px-4 py-2.5 border-4 theme-border theme-btn text-white font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all";
const retroLabel = "block text-sm font-bold uppercase tracking-wide theme-text mb-2";

// Input Preview
export function InputPreview() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4 w-full max-w-sm font-mono">
      <div>
        <label className={retroLabel}>Username</label>
        <input
          type="text"
          placeholder="ENTER USERNAME..."
          className={retroInput}
        />
      </div>
      <div>
        <label className={retroLabel}>Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="ENTER PASSWORD..."
            className={`${retroInput} pr-12`}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 theme-text-muted hover:theme-text"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div>
        <label className={retroLabel}>Email (Disabled)</label>
        <input
          type="email"
          placeholder="DISABLED..."
          disabled
          className={`${retroInput} opacity-50 cursor-not-allowed`}
        />
      </div>
    </div>
  );
}

// Textarea Preview
export function TextareaPreview() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Message</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="TYPE YOUR MESSAGE HERE..."
        rows={4}
        maxLength={maxLength}
        className={`${retroInput} resize-none`}
      />
      <div className="flex justify-between mt-2 text-xs theme-text-muted uppercase">
        <span>{value.length}/{maxLength} chars</span>
        <span>■ Retro Mode</span>
      </div>
    </div>
  );
}

// Select Preview
export function SelectPreview() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const options = ["Option Alpha", "Option Beta", "Option Gamma", "Option Delta"];

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Select Option</label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`${retroInput} flex items-center justify-between cursor-pointer text-left`}
        >
          <span className={selected ? "theme-text" : "theme-text-subtle"}>
            {selected || "SELECT..."}
          </span>
          <ChevronDown className={`w-5 h-5 theme-text-muted transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="absolute z-10 w-full mt-1 border-4 theme-border theme-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setOpen(false); }}
                className="w-full px-4 py-2 text-left theme-text hover:theme-bg-header uppercase text-sm transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// MultiSelect Preview
export function MultiSelectPreview() {
  const [selected, setSelected] = useState<string[]>(["React"]);
  const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

  const toggleOption = (option: string) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Select Technologies</label>
      <div className="border-4 theme-border theme-bg p-2">
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {selected.map(item => (
              <span key={item} className="inline-flex items-center gap-1 px-2 py-1 theme-btn text-white text-xs uppercase">
                {item}
                <button onClick={() => toggleOption(item)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
        <div className="space-y-1">
          {options.filter(o => !selected.includes(o)).map(option => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className="w-full px-3 py-1.5 text-left theme-text-muted hover:theme-bg-header text-sm uppercase transition-colors"
            >
              + {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// DatePicker Preview
export function DatePickerPreview() {
  const [date, setDate] = useState("");

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Select Date</label>
      <div className="relative">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`${retroInput} cursor-pointer`}
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 theme-text-muted pointer-events-none" />
      </div>
      <div className="mt-4 p-3 border-4 theme-border-light theme-bg-dark">
        <div className="text-xs theme-text-muted uppercase mb-2">■ Selected:</div>
        <div className="theme-text font-bold">
          {date || "NO DATE SELECTED"}
        </div>
      </div>
    </div>
  );
}

// FileUpload Preview
export function FileUploadPreview() {
  const [files, setFiles] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files).map(f => f.name);
    setFiles(prev => [...prev, ...newFiles]);
  };

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Upload Files</label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`border-4 border-dashed p-8 text-center cursor-pointer transition-all ${
          dragOver
            ? "theme-border theme-bg-header"
            : "theme-border-light theme-bg hover:theme-border"
        }`}
      >
        <Upload className="w-10 h-10 mx-auto mb-3 theme-text-muted" />
        <p className="theme-text-muted uppercase text-sm">
          Drop files here or click to upload
        </p>
        <input
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            const newFiles = Array.from(e.target.files || []).map(f => f.name);
            setFiles(prev => [...prev, ...newFiles]);
          }}
        />
      </div>
      {files.length > 0 && (
        <div className="mt-3 space-y-1">
          {files.map((file, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-2 theme-bg-header text-sm">
              <span className="theme-text uppercase truncate">{file}</span>
              <button onClick={() => setFiles(files.filter((_, idx) => idx !== i))} className="text-red-500 hover:text-red-700">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// RichTextEditor Preview
export function RichTextEditorPreview() {
  const [content, setContent] = useState("Type your retro content here...");

  return (
    <div className="w-full max-w-md font-mono">
      <label className={retroLabel}>Rich Text Editor</label>
      <div className="border-4 theme-border">
        {/* Toolbar */}
        <div className="flex gap-1 p-2 theme-bg-header border-b-4 theme-border">
          {[Bold, Italic, Underline, List].map((Icon, i) => (
            <button
              key={i}
              className="p-2 border-2 theme-border-light theme-bg hover:theme-bg-dark transition-colors"
            >
              <Icon className="w-4 h-4 theme-text" />
            </button>
          ))}
        </div>
        {/* Editor */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 theme-bg theme-text min-h-[150px] resize-none focus:outline-none"
        />
      </div>
    </div>
  );
}

// OtpInput Preview
export function OtpInputPreview() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="w-full max-w-sm font-mono text-center">
      <label className={retroLabel}>Enter Verification Code</label>
      <div className="flex gap-2 justify-center">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-14 text-center text-2xl font-bold border-4 theme-border theme-bg theme-text focus:outline-none focus:theme-shadow"
          />
        ))}
      </div>
      <p className="mt-4 text-sm theme-text-muted uppercase">
        Code: {otp.join("") || "------"}
      </p>
    </div>
  );
}

// Checkbox Preview
export function CheckboxPreview() {
  const [checked, setChecked] = useState({ terms: false, newsletter: true, updates: false });

  return (
    <div className="w-full max-w-sm font-mono space-y-3">
      <label className={retroLabel}>Preferences</label>
      {Object.entries(checked).map(([key, value]) => (
        <label key={key} className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => setChecked({ ...checked, [key]: !value })}
            className={`w-6 h-6 border-4 flex items-center justify-center transition-all ${
              value
                ? "theme-border theme-btn shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "theme-border-light theme-bg group-hover:theme-border"
            }`}
          >
            {value && <Check className="w-4 h-4 text-white" />}
          </div>
          <span className="theme-text uppercase text-sm">
            {key === "terms" ? "Accept Terms" : key === "newsletter" ? "Subscribe Newsletter" : "Product Updates"}
          </span>
        </label>
      ))}
    </div>
  );
}

// RadioGroup Preview
export function RadioGroupPreview() {
  const [selected, setSelected] = useState("medium");
  const options = [
    { value: "small", label: "Small - 8px" },
    { value: "medium", label: "Medium - 16px" },
    { value: "large", label: "Large - 24px" },
  ];

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Select Size</label>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => setSelected(option.value)}
              className={`w-6 h-6 border-4 flex items-center justify-center transition-all ${
                selected === option.value
                  ? "theme-border theme-bg-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "theme-border-light theme-bg group-hover:theme-border"
              }`}
            >
              {selected === option.value && (
                <div className="w-3 h-3 theme-accent-bg" />
              )}
            </div>
            <span className="theme-text uppercase text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

// Switch Preview
export function SwitchPreview() {
  const [switches, setSwitches] = useState({ darkMode: true, notifications: false, autoSave: true });

  return (
    <div className="w-full max-w-sm font-mono space-y-4">
      <label className={retroLabel}>Toggle Settings</label>
      {Object.entries(switches).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <span className="theme-text uppercase text-sm">
            {key === "darkMode" ? "Dark Mode" : key === "notifications" ? "Notifications" : "Auto Save"}
          </span>
          <button
            onClick={() => setSwitches({ ...switches, [key]: !value })}
            className={`relative w-14 h-8 border-4 transition-all ${
              value
                ? "theme-border theme-btn shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "theme-border-light theme-bg-header"
            }`}
          >
            <div
              className={`absolute top-0 w-5 h-5 bg-white border-2 border-black transition-all ${
                value ? "left-6" : "left-0"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

// Slider Preview
export function SliderPreview() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Adjust Value</label>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-4 appearance-none theme-bg-header border-4 theme-border cursor-pointer"
        />
        <div className="flex justify-between theme-text-muted text-xs uppercase">
          <span>0</span>
          <span className="theme-text font-bold text-lg">{value}</span>
          <span>100</span>
        </div>
        <div className="h-4 border-4 theme-border theme-bg-header">
          <div
            className="h-full theme-accent-bg transition-all"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// Form Preview
export function FormPreview() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-sm font-mono">
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <div>
            <label className={retroLabel}>Name</label>
            <input type="text" placeholder="YOUR NAME..." className={retroInput} required />
          </div>
          <div>
            <label className={retroLabel}>Email</label>
            <input type="email" placeholder="YOUR EMAIL..." className={retroInput} required />
          </div>
          <div>
            <label className={retroLabel}>Message</label>
            <textarea placeholder="YOUR MESSAGE..." rows={3} className={`${retroInput} resize-none`} required />
          </div>
          <button type="submit" className={`${retroButton} w-full`}>
            Submit Form
          </button>
        </form>
      ) : (
        <div className="text-center p-8 border-4 border-green-500 bg-green-100 dark:bg-green-900/30">
          <Check className="w-12 h-12 mx-auto mb-3 text-green-600" />
          <p className="text-green-800 dark:text-green-300 uppercase font-bold">Form Submitted!</p>
          <button onClick={() => setSubmitted(false)} className="mt-4 text-sm underline text-green-600">
            Reset Form
          </button>
        </div>
      )}
    </div>
  );
}

// MultiStepForm Preview
export function MultiStepFormPreview() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="w-full max-w-sm font-mono">
      {/* Progress */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className={`flex-1 h-3 border-4 ${
              s <= step
                ? "theme-border theme-btn"
                : "theme-border-light theme-bg-dark"
            }`}
          />
        ))}
      </div>
      <div className="text-center mb-4 theme-text-muted uppercase text-sm">
        Step {step} of {totalSteps}
      </div>

      {/* Step Content */}
      <div className="space-y-4 p-4 border-4 theme-border theme-bg">
        {step === 1 && (
          <>
            <h3 className="font-bold uppercase theme-text">■ Personal Info</h3>
            <input type="text" placeholder="FULL NAME..." className={retroInput} />
          </>
        )}
        {step === 2 && (
          <>
            <h3 className="font-bold uppercase theme-text">■ Contact Details</h3>
            <input type="email" placeholder="EMAIL..." className={retroInput} />
          </>
        )}
        {step === 3 && (
          <>
            <h3 className="font-bold uppercase theme-text">■ Confirmation</h3>
            <p className="theme-text-muted text-sm">Review your information and submit.</p>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className={`flex-1 px-4 py-2 border-4 theme-border-light uppercase font-bold theme-text ${
            step === 1 ? "opacity-50 cursor-not-allowed" : "hover:theme-bg-header"
          }`}
        >
          Back
        </button>
        <button
          onClick={() => setStep(Math.min(totalSteps, step + 1))}
          className={retroButton + " flex-1"}
        >
          {step === totalSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

// MultiStepFormDialog Preview
export function MultiStepFormDialogPreview() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="font-mono">
      <button onClick={() => setOpen(true)} className={retroButton}>
        Open Form Dialog
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="w-full max-w-md border-4 theme-border theme-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-4 theme-border theme-bg-header">
              <h2 className="font-bold uppercase theme-text">Registration</h2>
              <button onClick={() => { setOpen(false); setStep(1); }} className="theme-text-muted hover:theme-text">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress */}
            <div className="flex gap-1 p-4 theme-bg-dark">
              {[1, 2, 3].map(s => (
                <div key={s} className={`flex-1 h-2 ${s <= step ? "theme-accent-bg" : "theme-bg-header"}`} />
              ))}
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="text-center theme-text-muted uppercase text-sm">Step {step}/3</div>
              <input type="text" placeholder={`FIELD FOR STEP ${step}...`} className={retroInput} />
            </div>

            {/* Footer */}
            <div className="flex gap-2 p-4 border-t-4 theme-border-light">
              <button
                onClick={() => step > 1 ? setStep(step - 1) : setOpen(false)}
                className="flex-1 px-4 py-2 border-4 theme-border-light uppercase font-bold theme-text hover:theme-bg-header"
              >
                {step > 1 ? "Back" : "Cancel"}
              </button>
              <button
                onClick={() => step < 3 ? setStep(step + 1) : setOpen(false)}
                className={retroButton + " flex-1"}
              >
                {step < 3 ? "Next" : "Complete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// FieldArray Preview
export function FieldArrayPreview() {
  const [fields, setFields] = useState([{ id: 1, value: "Item Alpha" }, { id: 2, value: "Item Beta" }]);
  let nextId = Math.max(...fields.map(f => f.id)) + 1;

  const addField = () => {
    setFields([...fields, { id: nextId++, value: "" }]);
  };

  const removeField = (id: number) => {
    if (fields.length > 1) {
      setFields(fields.filter(f => f.id !== id));
    }
  };

  const updateField = (id: number, value: string) => {
    setFields(fields.map(f => f.id === id ? { ...f, value } : f));
  };

  return (
    <div className="w-full max-w-sm font-mono">
      <label className={retroLabel}>Dynamic Fields</label>
      <div className="space-y-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <div className="w-8 h-full flex items-center justify-center border-4 theme-border-light theme-bg-header theme-text-muted font-bold">
              {index + 1}
            </div>
            <input
              type="text"
              value={field.value}
              onChange={(e) => updateField(field.id, e.target.value)}
              placeholder="ENTER VALUE..."
              className={`${retroInput} flex-1`}
            />
            <button
              onClick={() => removeField(field.id)}
              disabled={fields.length === 1}
              className={`p-2 border-4 border-red-400 bg-red-100 dark:bg-red-900/30 text-red-600 ${
                fields.length === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-200 dark:hover:bg-red-800"
              }`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      <button onClick={addField} className={`${retroButton} w-full mt-4 flex items-center justify-center gap-2`}>
        <Plus className="w-5 h-5" />
        Add Field
      </button>
    </div>
  );
}
