import type { Meta, StoryObj } from "@storybook/react";
import BaseIcon from "..";
import React from "react";
import { iconsList } from "../icon";

const meta: Meta<typeof BaseIcon> = {
	title: "Foundation/BaseIcon",
	component: BaseIcon,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof BaseIcon>;

// Default story with complete props
export const Default: Story = {
	args: {
		name: "edit",
		size: "100px",
		classNameColor: {
			base: "text-primary",
			hover: "text-primary-bright",
			active: "text-secondary",
			disabled: "text-primary-very-bright",
		},
		onClick: () => console.log("Icon clicked"),
		disabled: false,
		active: false,
		className: "",
	},
	parameters: {
		docs: {
			source: {
				code: `
  import { BaseIcon } from 'wcf-component-lib/src/components';
  
  const Example = () => (
  <BaseIcon 
    name="edit"
    size="24px"
    classNameColor={{
  	    base: "text-primary",
		hover: "text-primary-bright",
		active: "text-secondary",
		disabled: "text-primary-very-bright",
    }}
    onClick={() => console.log("Icon clicked")}
    disabled={false}
    active={false}
  />
  );
          `,
			},
		},
	},
};

// Primary color states
export const PrimaryStates: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "2rem" }}>
			{/* Normal */}
			<BaseIcon
				name="edit"
				classNameColor={{
					base: "text-primary",
					hover: "text-primary-dark",
					active: "text-primary-bright",
					disabled: "text-disable",
				}}
			/>
			{/* Active */}
			<BaseIcon
				name="edit"
				active
				classNameColor={{
					base: "text-primary",
					hover: "text-primary-dark",
					active: "text-primary-bright",
					disabled: "text-disable",
				}}
			/>
			{/* Disabled */}
			<BaseIcon
				name="edit"
				disabled
				classNameColor={{
					base: "text-primary",
					hover: "text-primary-dark",
					active: "text-primary-bright",
					disabled: "text-disable",
				}}
			/>
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
import { BaseIcon } from 'wcf-component-lib/src/components';

const Example = () => (
  <div style={{ display: 'flex', gap: '2rem' }}>
    <BaseIcon
      name="edit"
      classNameColor={{
        base: "text-primary",
        hover: "text-primary-dark",
        active: "text-primary-bright",
        disabled: "text-disable"
      }}
    />
    <BaseIcon
      name="edit"
      active
      classNameColor={{
        base: "text-primary",
        hover: "text-primary-dark",
        active: "text-primary-bright",
        disabled: "text-disable"
      }}
    />
    <BaseIcon
      name="edit"
      disabled
      classNameColor={{
        base: "text-primary",
        hover: "text-primary-dark",
        active: "text-primary-bright",
        disabled: "text-disable"
      }}
    />
  </div>
);
        `,
			},
		},
	},
};

// Different states with Error color
export const ErrorStates: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "2rem" }}>
			<BaseIcon
				name="delete"
				classNameColor={{
					base: "text-error",
					hover: "text-error-vbright",
					active: "text-error",
					disabled: "text-disable",
				}}
			/>
			<BaseIcon
				name="delete"
				active
				classNameColor={{
					base: "text-error",
					hover: "text-error-vbright",
					active: "text-error",
					disabled: "text-disable",
				}}
			/>
			<BaseIcon
				name="delete"
				disabled
				classNameColor={{
					base: "text-error",
					hover: "text-error-vbright",
					active: "text-error",
					disabled: "text-disable",
				}}
			/>
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
import { BaseIcon } from 'wcf-component-lib/src/components';

const Example = () => (
  <div style={{ display: 'flex', gap: '2rem' }}>
    <BaseIcon
      name="delete"
      classNameColor={{
        base: "text-error",
        hover: "text-error-vbright",
        active: "text-error",
        disabled: "text-disable"
      }}
    />
    <BaseIcon
      name="delete"
      active
      classNameColor={{
        base: "text-error",
        hover: "text-error-vbright",
        active: "text-error",
        disabled: "text-disable"
      }}
    />
    <BaseIcon
      name="delete"
      disabled
      classNameColor={{
        base: "text-error",
        hover: "text-error-vbright",
        active: "text-error",
        disabled: "text-disable"
      }}
    />
  </div>
);
        `,
			},
		},
	},
};

// Size variations
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
			{["16px", "24px", "32px", "48px"].map((size) => (
				<BaseIcon
					key={size}
					name="edit"
					size={size}
					classNameColor={{
						base: "text-primary",
						hover: "text-primary-dark",
						active: "text-primary-bright",
					}}
				/>
			))}
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
import { BaseIcon } from 'wcf-component-lib/src/components';

const Example = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    {['16px', '24px', '32px', '48px'].map((size) => (
      <BaseIcon
        key={size}
        name="edit"
        size={size}
        classNameColor={{
          base: "text-primary",
          hover: "text-primary-dark",
          active: "text-primary-bright",
        }}
      />
    ))}
  </div>
);
        `,
			},
		},
	},
};

// Different status colors
export const StatusColors: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "2rem" }}>
			<BaseIcon
				name="edit"
				classNameColor={{
					base: "text-success",
					hover: "text-success-vbright",
				}}
			/>
			<BaseIcon
				name="edit"
				classNameColor={{
					base: "text-waiting",
					hover: "text-waiting-vbright",
				}}
			/>
			<BaseIcon
				name="edit"
				classNameColor={{
					base: "text-pending",
					hover: "text-pending-vbright",
				}}
			/>
			<BaseIcon
				name="delete"
				classNameColor={{
					base: "text-error",
					hover: "text-error-vbright",
				}}
			/>
		</div>
	),
	parameters: {
		docs: {
			source: {
				code: `
import { BaseIcon } from 'wcf-component-lib/src/components';

const Example = () => (
  <div style={{ display: 'flex', gap: '2rem' }}>
    <BaseIcon
      name="edit"
      classNameColor={{
        base: "text-success",
        hover: "text-success-vbright",
      }}
    />
    <BaseIcon
      name="edit"
      classNameColor={{
        base: "text-waiting",
        hover: "text-waiting-vbright",
      }}
    />
    <BaseIcon
      name="edit"
      classNameColor={{
        base: "text-pending",
        hover: "text-pending-vbright",
      }}
    />
    <BaseIcon
      name="delete"
      classNameColor={{
        base: "text-error",
        hover: "text-error-vbright",
      }}
    />
  </div>
);
        `,
			},
		},
	},
};

// Interactive example
export const Interactive: Story = {
	args: {
		name: "edit",
		size: "24px",
		classNameColor: {
			base: "text-primary",
			hover: "text-primary-dark",
			active: "text-primary-bright",
			disabled: "text-disable",
		},
		onClick: () => alert("Icon clicked!"),
	},
	parameters: {
		docs: {
			source: {
				code: `
import { BaseIcon } from 'wcf-component-lib/src/components';

const Example = () => (
  <BaseIcon
    name="edit"
    size="24px"
    classNameColor={{
      base: "text-primary",
      hover: "text-primary-dark",
      active: "text-primary-bright",
      disabled: "text-disable"
    }}
    onClick={() => alert("Icon clicked!")}
  />
);
        `,
			},
		},
	},
};

const iconText = iconsList.map((iconName) => `"${iconName}"`).join(", ");
// Icon Gallery showing all available iconsList
export const IconGallery: Story = {
	render: () => {
		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Icon Gallery</h3>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(6, 1fr)",
						gap: "2rem",
						padding: "1rem",
						backgroundColor: "#f5f5f5",
						borderRadius: "8px",
					}}
				>
					{iconsList.map((iconName) => (
						<div
							key={iconName}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "0.5rem",
								padding: "1rem",
								backgroundColor: "white",
								borderRadius: "4px",
								boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
							}}
						>
							<BaseIcon
								name={iconName}
								size="24px"
								classNameColor={{
									base: "text-primary",
									hover: "text-primary-dark",
									active: "text-primary-bright",
									disabled: "text-disable",
								}}
							/>
							<span
								style={{
									fontSize: "12px",
									color: "#666",
									textAlign: "center",
									wordBreak: "break-word",
								}}
							>
								{iconName}
							</span>
						</div>
					))}
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import { BaseIcon } from 'wcf-component-lib/src/components';

const IconGallery = () => {
  const iconsList = [${iconText}];

  return (
    <div>
      <h3>Icon Gallery</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2rem' }}>
        {iconsList.map((iconName) => (
          <div key={iconName}>
            <BaseIcon
              name={iconName}
              size="24px"
              classNameColor={{
                base: "text-primary",
                hover: "text-primary-dark",
                active: "text-primary-bright",
                disabled: "text-disable",
              }}
            />
            <span>{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
        `,
			},
			description: {
				story:
					"A gallery showcase of all available iconsList in the BaseIcon component.",
			},
		},
	},
};
